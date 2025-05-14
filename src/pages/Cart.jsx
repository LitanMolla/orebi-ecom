import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Btn from "../components/Btn";

const Cart = () => {
  return (
    <>
      <div className="mt-31 mb-35">
        <Container>
          <h2 className="text-[49px] font-bold mb-3">Cart</h2>
          <p className="text-xs text-[#6D6D60] mb-34">
            <Link to={"/"}>Home</Link> / <Link to={"/cart"}>Cart</Link>
          </p>
          <div className="border border-[#F5F5F3] ">
            <table className="w-full text-left">
              <thead className="bg-[#F5F5F3] text-base font-bold">
                <th className="w-1/4 py-5 pl-5">Product</th>
                <th className="w-1/4 py-5">Price</th>
                <th className="w-1/4 py-5">Quantity</th>
                <th className="w-1/4 py-5">Total</th>
              </thead>
              <tbody>
                <tr>
                  <td className="flex gap-x-3 py-5 pl-5">
                    <button>x</button>
                    <img src="" alt="Product img" />
                    <p className="text-base font-bold">Product Name</p>
                  </td>
                  <td className=" py-5">
                    <h5 className="font-bold text-xl">$44.00</h5>
                  </td>
                  <td className=" py-5">
                    <div className="text-base text[#767676] flex gap-x-3 border border-[#767676] justify-center w-max px-2">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                  </td>
                  <td className=" py-5">
                    <h5 className="font-bold text-xl">$44.00</h5>
                </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center px-5 py-5">
                <div className="space-x-3">
                    <select name="" id="" className="border border-[#767676] text-base outline-0 px-2 w-[150px]">
                        <option value="">SIZE</option>
                        <option value="">M</option>
                        <option value="">L</option>
                    </select>
                    <button className="text-sm font-bold">Apply coupon</button>
                </div>
                <div className="">
                    <button className="text-sm font-bold">Update cart</button>
                </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-3"></div>
            <div className="flex-2">
                <h6 className="font-bold text-xl text-right mb-6 mt-13">Cart totals</h6>
               <table className="w-full border border-[#E5E5E5]">
                <tbody>
                    <tr className="border border-[#767676]">
                        <td className="text-base font-bold p-2 border-r border-r-[#767676]">Subtotal</td>
                        <td className="text-base text-[#767676] p-2">389.99 $</td>
                    </tr>
                    <tr className="border border-[#767676]">
                        <td className="text-base font-bold p-2 border-r border-r-[#767676]">Total</td>
                        <td className="text-base p-2">389.99 $</td>
                    </tr>
                </tbody>
               </table>
               <div className="flex justify-end mt-7">
                <Btn text={'Proceed to Checkout'} />
               </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
