# React AutoSize Container

AutoSize component provide dimensions of container 

## Getting started

```
yarn add react-autosize-container --save
```

## Usage

```jsx
import React from 'react'
import { AutoSize } from 'react-autosize-container'

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
