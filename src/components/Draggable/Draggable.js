import React from 'react'
import './style.css';

export const Draggable = ({ children }) => {
  return (
    <div draggable={true} className={'draggable-box'}>
      { children }
    </div>
  )
}
