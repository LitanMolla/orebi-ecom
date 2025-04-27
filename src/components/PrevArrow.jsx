import React from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";


const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={'bg-gray-500/50 absolute left-0 top-1/2 z-10 -translate-y-1/2 py-2 px-5 rounded-r-2xl'}
        onClick={onClick}
      ><MdOutlineArrowBackIosNew className='text-white text-3xl' />
</div>
    );
}

export default PrevArrow