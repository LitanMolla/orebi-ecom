import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'

const Login = () => {
  return (
    <>
        <div className="mt-32 mb-35">
            <Container>
                <h2 className='font-bold text-5xl'>Login</h2>
                <p className='text-xs text-[#767676] mt-3 mb-31'><Link to={'/'}>Home</Link>  /  <Link to={'/login'}>Login</Link></p>
                <p className='text-[#767676] text-base w-1/2 pr-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <hr className='mt-15 border-0 bg-gray-300 h-[2px] mb-14'/>
                <form action="" className='w-[70%]'>
                    <h3 className='font-bold text-[39px] mb-10'>Returning Customer</h3>
                    <div className="flex gap-x-8 mb-7">
                      <div className="flex-1">
                        <label htmlFor="" className='text-base font-bold block'>Email address</label>
                        <input type="text" placeholder='company@domain.com' className='w-full outline-0 border-b border-gray-300 py-3' />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="" className='text-base font-bold block'>Password</label>
                        <input type="password" placeholder='*********' className='w-full outline-0 border-b border-gray-300 py-3' />
                      </div>
                    </div>
                    <Btn text={'Log in'} />
                </form>
                    <hr className='border-0 h-[2px] bg-gray-300 mt-18 mb-15' />
                <h3 className='font-bold text-[39px] '>New Customer</h3>
                <p className='w-1/2 text-[#767676] my-10 pr-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <Btn text={'Continue'} />
            </Container>
        </div>
    </>
  )
}

export default Login