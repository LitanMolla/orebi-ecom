import React from "react";
import Container from "../components/Container";
import Product from "../components/Product";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";

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

  return (
    <div className="mb-31">
      <Container>
        <h3 className="text-[39px] mb-12 font-bold">New Arrivals</h3>
        <Slider {...settings}>
          <div>
            <Product
              img={product1}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badge={"10%"}
            />
          </div>
          <div>
            <Product
              img={product2}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badge={"10%"}
            />
          </div>
          <div>
            <Product
              img={product3}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badge={"10%"}
            />
          </div>
          <div>
            <Product
              img={product4}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badge={"10%"}
            />
          </div>
          <div>
            <Product
              img={product5}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badge={"10%"}
            />
          </div>
          <div>
            <Product
              img={product6}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badge={"10%"}
            />
          </div>
          <div>
            <Product
              img={product7}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badge={"10%"}
            />
          </div>
          <div>
            <Product
              img={product8}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badge={"10%"}
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Arrivals;
