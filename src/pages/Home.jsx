import React from 'react'
import Banner from '../layouts/Banner'
import Policy from '../components/Policy'
import Ads from '../layouts/Ads'
import Arrivals from '../layouts/Arrivals'
import HomeProduct from '../layouts/HomeProduct'
import Container from '../components/Container'
import Image from '../components/Image'
import bannerBottom from '../assets/images/bannerBottom.png'
import { Link } from 'react-router-dom'
import Offers from '../layouts/Offers'

const Home = () => {
  return (
    <>
        <Banner/>
        <Policy/>
        <Ads/>
        <Arrivals/>
        <HomeProduct/>
        <Container>
          <Link to={'/'}><Image src={bannerBottom} className={'w-full'}/></Link>
          <div className="mb-32"></div>
        </Container>
        <Offers/>
    </>
  )
}

export default Home