import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const MyAccount = () => {
  return (
    <>
        <div className="mb-35 mt-31">
            <Container>
                <h2 className='font-bold text-[49px] mb-3'>My Account</h2>
                <p className='text-[#6D6D60] text-xs mb-32'> <Link to={'/'}>Home</Link>  /  <Link to={'/account'}>My account</Link></p>
                <div className="flex gap-x-5">
                    <div className="flex-1">
                        <ul>
                            <Link to={'/'}><li className='text-base text-[#767676] border-b-gray-300 border-b pb-5 transition-all duration-500 hover:text-black hover:font-bold'>Dashboard</li></Link>
                            <Link to={'/'}><li className='text-base text-[#767676] border-b-gray-300 border-b py-5 transition-all duration-500 hover:text-black hover:font-bold'>Others</li></Link>
                            <Link to={'/'}><li className='text-base text-[#767676] border-b-gray-300 border-b py-5 transition-all duration-500 hover:text-black hover:font-bold'>Donwloads</li></Link>
                            <Link to={'/'}><li className='text-base text-[#767676] border-b-gray-300 border-b py-5 transition-all duration-500 hover:text-black hover:font-bold'>Addresses</li></Link>
                            <Link to={'/'}><li className='text-base text-[#767676] border-b-gray-300 border-b py-5 transition-all duration-500 hover:text-black hover:font-bold'>Account details</li></Link>
                            <Link to={'/'}><li className='text-base text-[#767676] border-b-gray-300 border-b py-5 transition-all duration-500 hover:text-black hover:font-bold'>Logout</li></Link>
                        </ul>
                    </div>
                    <div className="flex-3 text-[#767676] text-base pl-5">
                        <p className='mb-10'>Hello <span className='text-black'>admin</span> (not <span className='text-black'>admin</span>? <span className='text-black'><span className='text-black'>Log out</span></span>)</p>
                        <p>From your account dashboard you can view your <span className='text-black'>recent orders</span>, manage your <span className='text-black'>shipping and billing addresses</span>, <span className='text-black'>and edit your password and account details.</span></p>
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default MyAccount