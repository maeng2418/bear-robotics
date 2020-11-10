import React from 'react'
import './style.css';

export const Box = ({children}) => {
  return (
    <div className={"box"}>
      {children}
    </div>
  )
}
