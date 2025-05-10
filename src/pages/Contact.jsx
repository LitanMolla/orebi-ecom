import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'

const Contact = () => {
  return (
    <>
        <div className="mt-32">
            <Container>
                <h2 className='font-bold text-5xl'>Contacts</h2>
                <p className='text-xs text-[#767676] mt-3 mb-31'><Link to={'/'}>Home</Link>  >  <Link to={'/contact'}>Contacts</Link></p>
                <form action="" className='mb-35'>
                    <h2 className='font-bold text-5xl mb-10'>Fill up a Form</h2>
                    <label htmlFor="" className='block text-base font-bold  '>Name</label>
                    <input type="text" placeholder='Your name here' className='border-b-2 border-b-gray-300 w-1/2 py-4 outline-0 mb-6'/>
                    <label htmlFor="" className='block text-base font-bold '>Message</label>
                    <textarea name="" id="" placeholder='Your message here' className='border-b-2 border-b-gray-300 w-1/2 py-4 outline-0 mb-8 block'></textarea>
                    <Btn text={'Post'} />
                </form>
            </Container>
        </div>
    </>
  )
}

export default Contact