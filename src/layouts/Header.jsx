import React from 'react'
import Image from '../components/Image'
import logo from '../../public/images/logo.png'
import Container from '../components/Container'
import Menu from '../components/Menu'
import Bar from '../components/icons/Bar'
import Flex from '../components/Flex'
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <>
    <div className="bg-white py-8">
      <Container>
      <div className="flex justify-between items-center">
        <div className="">
          <Link to={'/'}><Image src={logo} alt={'Logo'}/></Link>
        </div>
        <div className="m-auto">
          <Menu/>
        </div>
      </div>
      </Container>
    </div>
    <div className="bg-footer py-6">
      <Container>
        <Flex className={'justify-between items-center'}>
        <div className="flex-1">
          <div className="flex gap-x-1 items-center">
            <Bar/>
            <p className='text-sm'>Shop by Category</p>
          </div>
        </div>
        <div className="flex-2 relative">
          <input className='bg-white p-4 w-full outline-0' type="text" placeholder='Search Products'/>
          <FaSearch className='absolute transform -translate-y-1/2 right-3 top-1/2'/>
        </div>
        <div className="flex-1 flex gap-x-5 justify-end">
          <div className="flex gap-x-2">
            <FaUser/>
            <FaCaretDown />
          </div>
          <FaShoppingCart />
        </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Header