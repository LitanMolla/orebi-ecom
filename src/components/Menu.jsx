import React from 'react'

const Menu = () => {
  return (
    <>
        <ul className='flex gap-x-10 text-sm'>
            <li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>Home</li>
            <li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>Shop</li>
            <li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>About</li>
            <li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>Contact</li>
            <li className='hover:text-primary hover:font-bold transition-all duration-700 text-hover'>Journal</li>
        </ul>
    </>
  )
}

export default Menu