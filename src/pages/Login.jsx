import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className="mt-32 mb-35">
            <Container>
                <h2 className='font-bold text-5xl'>Login</h2>
                <p className='text-xs text-[#767676] mt-3 mb-31'><Link to={'/'}>Home</Link>  >  <Link to={'/login'}>Login</Link></p>
                <p className='text-[#767676] text-base w-1/2 pr-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <hr className='mt-15 border-0 bg-gray-300 h-[2px] mb-14'/>
                <form action="" className='w-4/3'>
                    <h3 className='font-bold text-[39px]'>Returning Customer</h3>
                </form>
            </Container>
        </div>
    </>
  )
}

export default Login