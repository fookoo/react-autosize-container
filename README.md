# React AutoSize Container

AutoSize component provide dimensions of container 

## Usage

```jsx
import React from 'react'
import { AutoSize } from "fookoo/react-autosize-container"

export const TestExample: React.FC<{}> = () => (
  <AutoSize>
    {({ width, height }) => (
      <span>
        My container is {widht}px x {height}px
      </span>
   )}  
  </AutoSize>
)
```
