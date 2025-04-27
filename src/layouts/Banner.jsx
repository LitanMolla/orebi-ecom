import React from 'react'
import Image from '../components/Image'
import banner1 from '../../public/images/banner1.png'
import banner2 from '../../public/images/banner2.png'
import banner3 from '../../public/images/banner3.png'
import banner4 from '../../public/images/banner4.png'
import banner5 from '../../public/images/banner5.png'

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import NextArrow from '../components/icons/NextArrow'
import PrevArrow from '../components/PrevArrow'

const Banner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

  return (
    <>
        <Slider {...settings} className='relative'>
      <div>
        <Link to={'/'}><Image src={banner1} alt={'Banner Img'} className={'w-full'}/></Link>
      </div>
      <div>
      <Link to={'/'}><Image src={banner2} alt={'Banner Img'} className={'w-full'}/></Link>
      </div>
      <div>
      <Link to={'/'}><Image src={banner3} alt={'Banner Img'} className={'w-full'}/></Link>
      </div>
      <div>
      <Link to={'/'}><Image src={banner4} alt={'Banner Img'} className={'w-full'}/></Link>
      </div>
      <div>
      <Link to={'/'}><Image src={banner5} alt={'Banner Img'} className={'w-full'}/></Link>
      </div>
    </Slider>
    </>
  )
}

export default Banner