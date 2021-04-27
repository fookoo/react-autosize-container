import React, { useEffect, useRef, useState } from 'react'

const debounce = function debounce<T extends Function>(cb: T, wait = 20) {
  let h: number

  return (...args: unknown[]) => {
    clearTimeout(h)
    h = setTimeout(() => cb(...args), wait)
  }
}

interface IBoxDimension {
  width: number
  height: number
}

interface IAutoSizerProps {
  style?: React.CSSProperties
  children: (dimensions: IBoxDimension) => React.ReactElement
}

export const AutoSize: React.FC<IAutoSizerProps> = ({ style, children }) => {
  const container = useRef<HTMLDivElement>(null)
  const [dimension, setDimension] = useState<IBoxDimension>(() => {
    return {
      height: container?.current?.clientHeight || 0,
      width: container?.current?.clientWidth || 0,
    }
  })

  const handleResize = () => {
    if (container.current) {
      const width = container.current?.clientWidth
      const height = container.current?.clientHeight

      setDimension((prev) => {
        if (prev.width !== width || prev.height !== height) {
          return {
            width,
            height,
          }
        }

        return prev
      })
    }
  }

  useEffect(() => {
    let observer: ResizeObserver
    const observedElement = container.current
    const debounced = debounce(handleResize, 20)

    if (window.ResizeObserver && observedElement) {
      observer = new ResizeObserver(debounced)
      observer.observe(observedElement)
    } else {
      // this is fallback if ResizeObserver is not supported
      window.addEventListener('resize', debounced)

      setTimeout(debounced, 100)
    }

    return () => {
      if (window.ResizeObserver && observedElement) {
        observer.unobserve(observedElement)
      } else {
        window.removeEventListener('resize', debounced)
      }
    }
  }, [])

  return (
    <div ref={container} style={{...style, width: 'inherit', height: 'inherit'}}>
      {children(dimension)}
    </div>
  )
}
