import React from 'react'
import Container from '../components/Container'
import Product from '../components/Product'
import product1 from '../assets/images/product1.png'

const HomeProduct = () => {
  return (
    <>
        <div className="mb-32">
            <Container>
                <div className="flex justify-between flex-wrap">
                    <Product img={product1} title={'Basic Crew Neck Tee'} price={'$44.00'} badge={'New'}/>
                    <Product img={product1} title={'Basic Crew Neck Tee'} price={'$44.00'} badge={'New'}/>
                    <Product img={product1} title={'Basic Crew Neck Tee'} price={'$44.00'} badge={'New'}/>
                    <Product img={product1} title={'Basic Crew Neck Tee'} price={'$44.00'} badge={'New'}/>
                </div>
            </Container>
        </div>
    </>
  )
}

export default HomeProduct