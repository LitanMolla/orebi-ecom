import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import ad1 from '../assets/images/ad1.png'
import ad2 from '../assets/images/ad2.png'
import ad3 from '../assets/images/ad3.png'

const Ads = () => {
  return (
    <>
        <div className="mt-43 mb-32">
            <Container>
                <div className="flex justify-between gap-x-10 items-center">
                    <div className="flex-1">
                        <Link to={'/'}>
                             <Image src={ad1} className={'w-full'} alt={'Ad Image'}/>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <div className="grid gap-y-10">
                        <Link to={'/'}>
                             <Image src={ad2} className={'w-full'} alt={'Ad Image'}/>
                        </Link>
                        <Link to={'/'}>
                             <Image src={ad3} className={'w-full'} alt={'Ad Image'}/>
                        </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Ads