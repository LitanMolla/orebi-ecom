import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


const NextArrow = (props) => {
    const { onClick } = props;
  return (
    <div
      className={'bg-gray-500/50 absolute right-0 top-1/2 z-10 -translate-y-1/2 py-2 px-5 rounded-l-2xl'}
      onClick={onClick}
    ><MdOutlineArrowForwardIos  className='text-white text-3xl'/></div>
  );

}

export default NextArrow