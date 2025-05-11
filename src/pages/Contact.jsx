import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'

const Contact = () => {
  return (
    <>
        <div className="mt-32 mb-35">
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7304.294887618815!2d90.382327!3d23.742121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b70657d0d5%3A0x772d33c2482a0b29!2sMehar%20Plaza%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1746911430627!5m2!1sen!2sbd" frameborder="0" className='w-full h-[570px]'></iframe>
            </Container>
        </div>
    </>
  )
}

export default Contact

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7304.294887618815!2d90.382327!3d23.742121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b70657d0d5%3A0x772d33c2482a0b29!2sMehar%20Plaza%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1746911430627!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}