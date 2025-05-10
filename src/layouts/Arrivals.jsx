import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Product from "../components/Product";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../components/icons/NextArrow";
import PrevArrow from "../components/PrevArrow";

const Arrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [value,setValue] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => setValue(data.products)
    )
  },)
  // console.log(value);
  
  return (
    <div className="mb-31">
      <Container>
        <h3 className="text-[39px] mb-12 font-bold">New Arrivals</h3>
        <Slider {...settings} className="[&_.slick-slide]:px-2 -mx-2">
          {
            value.map((item)=>(
              <div>
            <Product
              img={item.thumbnail}
              title={item.title}
              price={item.price}
              badge={`${item.discountPercentage} %`}
            />
          </div>
            ))
          }
        </Slider>
      </Container>
    </div>
  );
};

export default Arrivals;
