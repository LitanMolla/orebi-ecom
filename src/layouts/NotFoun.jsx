import React from 'react'
import Image from '../components/Image'
import notFound from '../assets/images/notFound.png'
import Container from '../components/Container'

const NotFoun = () => {
  return (
    <>
        <Container>
        <div className="w-1/2 m-auto my-20">
        <Image src={notFound} className={'w-full'}/>
        </div>
        </Container>
    </>
  )
}

export default NotFoun