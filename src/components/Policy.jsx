import React from 'react'
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { FaRotateLeft } from "react-icons/fa6";
import Container from './Container';

const Policy = () => {
  return (
    <>
    <div className="py-3 border-b">
        <Container>
            <div className="flex justify-between items-center">
                <div className="flex gap-x-3 items-center">
                    <RiNumber2 className='text-xl'/>
                    <p className='text-base text-[6D6D6D]'>Two years warranty</p>
                </div>
                <div className="flex gap-x-3 items-center">
                    <FaTruck className='text-xl'/>
                    <p className='text-base text-[6D6D6D]'>Free shipping</p>
                </div>
                <div className="flex gap-x-3 items-center">
                    <FaRotateLeft className='text-xl'/>
                    <p className='text-base text-[6D6D6D]'>Return policy in 30 days</p>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Policy