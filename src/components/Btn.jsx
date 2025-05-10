import React from 'react'

const Btn = ({text}) => {
  return (
    <>
        <button className='font-bold bg-black text-white py-4 px-21 transition-all duration-500 hover:bg-white hover:text-black border-2 border-black'>{text}</button>
    </>
  )
}

export default Btn