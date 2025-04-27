import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
        <ul className='flex gap-x-10 text-sm'>
            <Link to={'/'}><li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>Home</li></Link>
            <Link to={'/shop'}><li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>Shop</li></Link>
            <Link to={'/about'}><li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>About</li></Link>
            <Link to={'/contact'}><li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>Contact</li></Link>
            <Link to={'/journal'}><li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>Journal</li></Link>
        </ul>
    </>
  )
}

export default Menu