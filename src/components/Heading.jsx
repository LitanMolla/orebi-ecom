import React from 'react'
import { Children,className } from 'react'

const Heading = ({children,}) => {
  return (
    <div className={` ${className}`}>{children}</div>
  )
}

export default Heading