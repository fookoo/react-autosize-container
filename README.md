# React AutoSize Container

AutoSize component provide dimensions of container 

## Getting started

```
yarn add react-autosize-container --save
```

## Usage

```jsx
import { AutoSize } from 'react-autosize-container'

export const TestExample = () => (
  <AutoSize>
    {({ width, height }) => (
      <span>
        My container is {width}px x {height}px
      </span>
   )}  
  </AutoSize>
)
```
