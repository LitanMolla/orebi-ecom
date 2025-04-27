import React from 'react'
import { FaHeart,FaShoppingCart  } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";


const Product = ({img,alt,title,price,badge}) => {
  return (
    <>
    <div className="w-[305px] group duration-500 transition-all">
        <div className="relative">
            <img src={img} alt={alt} className='w-full'/>
            <span className='py-2 px-8 bg-black text-white font-bold text-sm absolute top-5 left-5'>{badge}</span>
            <div className="bg-white p-8 absolute w-full left-0 bottom-0 space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-x-3 justify-end">
                    <p className='text-base text-[#767676] hover:font-bold text-black duration-500'>Add to Wish List</p>
                    <FaHeart />
                </div>
                <div className="flex items-center gap-x-3 justify-end">
                    <p className='text-base text-[#767676] hover:font-bold text-black duration-500'>Compare</p>
                    <LuRefreshCcw />
                </div>
                <div className="flex items-center gap-x-3 justify-end">
                    <p className='text-base text-[#767676] hover:font-bold text-black duration-500'>Add to Cart</p>
                    <FaShoppingCart  />
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-6 mb-11">
            <h4 className='text-[20px] font-bold'>{title}</h4>
            <p className='text-base text-[#767676}'>{price}</p>
        </div>
    </div>
    </>
  )
}

export default Product