import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import logo from '../../public/images/logo.png'

const Footer = () => {
  return (
    <>
    <div className="bg-footer py-14">
        <Container className={'flex'}>
          <div className="flex-1 flex">
            <div className="flex-1">
              <h4 className='text-base font-bold mb-2'>MENU</h4>
              <ul className='text-sm text-[#6D6D6D] space-y-2 grid'>
                <Link><li className='hover:text-black duration-500'>Home</li></Link>
                <Link><li className='hover:text-black duration-500'>Shop</li></Link>
                <Link><li className='hover:text-black duration-500'>About</li></Link>
                <Link><li className='hover:text-black duration-500'>Contact</li></Link>
                <Link><li className='hover:text-black duration-500'>Journal</li></Link>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className='text-base font-bold mb-2'>SHOP</h4>
              <ul className='text-sm text-[#6D6D6D] space-y-2 grid'>
                <Link><li className='hover:text-black duration-500'>Category 1</li></Link>
                <Link><li className='hover:text-black duration-500'>Category 2</li></Link>
                <Link><li className='hover:text-black duration-500'>Category 3</li></Link>
                <Link><li className='hover:text-black duration-500'>Category 4</li></Link>
                <Link><li className='hover:text-black duration-500'>Category 5</li></Link>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className='text-base font-bold mb-2'>HELP</h4>
              <ul className='text-sm text-[#6D6D6D] space-y-2 grid'>
                <Link><li className='hover:text-black duration-500'>Privacy Policy</li></Link>
                <Link><li className='hover:text-black duration-500'>Terms & Conditions</li></Link>
                <Link><li className='hover:text-black duration-500'>Special E-shop</li></Link>
                <Link><li className='hover:text-black duration-500'>Shipping</li></Link>
                <Link><li className='hover:text-black duration-500'>Secure Payments</li></Link>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1">
              <h4 className='text-base font-bold'>(052) 611-5711</h4>
              <h4 className='text-base font-bold'>company@domain.com</h4>
              <p className='text-sm text-[#6D6D6D] mt-2'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="flex-1">
              <Link to={'/'}><Image src={logo}/></Link>
            </div>
          </div>
        </Container>
    </div>
    </>
  )
}

export default Footer