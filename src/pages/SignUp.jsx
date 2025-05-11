import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Btn from "../components/Btn";

const SignUp = () => {
    const [div,setDiv] = useState([])
    const [dis,setDis] = useState([])
    useEffect(()=>{
        fetch('https://bdapi.vercel.app/api/v.1/division')
        .then(response => response.json())
        .then(divData => setDiv(divData.data))
    },[])
    useEffect(()=>{
        fetch('https://bdapi.vercel.app/api/v.1/district')
        .then(response => response.json())
        .then(disData => setDis(disData.data))
    },[])
    console.log(dis);
    
  return (
    <>
      <div className="mt-31 mb-35">
        
        <Container>
          <h2 className="font-bold text-[49px] mb-3">Sign up</h2>
          <p className="text-[#6D6D60] text-xs">
            <Link to={"/"}>Home</Link> / <Link to={"/signup"}>Sign up</Link>
          </p>
          <p className="w-1/2 text-base text-[#767676] pr-6 mt-32">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <hr className="border-0 h-[1px] bg-gray-300 my-15" />
          <form action="" method="get">
            <h3 className="font-bold text-[39px] mb-10">
              Your Personal Details
            </h3>
            <div className="w-[70%]">
              <div className="flex gap-x-8">
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
              </div>
              <div className="flex gap-x-8 mt-4">
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Email address
                  </label>
                  <input
                    type="text"
                    placeholder="company@domain.com"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Your phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Telephone"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
              </div>
            </div>
            <hr className="border-0 h-[1px] bg-gray-300 my-15" />
            <h3 className="font-bold text-[39px] mb-10">New Customer</h3>
            <div className="w-[70%]">
              <div className="flex gap-x-8">
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Address 1
                  </label>
                  <input
                    type="text"
                    placeholder="4279 Zboncak Port Suite 6212"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Address 2
                  </label>
                  <input
                    type="text"
                    placeholder="--"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
              </div>
              <div className="flex gap-x-8 mt-4">
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Your City"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Post Code
                  </label>
                  <input
                    type="text"
                    placeholder="05228"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
              </div>
              <div className="flex gap-x-8 mt-4">
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Division
                  </label>
                  <select name="" id="" className="block outline-0 w-full border-b border-b-gray-300 py-3">
                    {
                        div.map((division)=><option>{division.name}</option>)
                    }
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    District
                  </label>
                  <select name="" id="" className="block outline-0 w-full border-b border-b-gray-300 py-3">
                    {
                        dis.map((district)=><option>{district.name}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
            
            <hr className="border-0 h-[1px] bg-gray-300 my-15" />
            <h3 className="font-bold text-[39px] mb-10">Your Password</h3>
            <div className="w-[70%]">
              <div className="flex gap-x-8">
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="" className="block font-bold text-base">
                    Repeat Password
                  </label>
                  <input
                    type="text"
                    placeholder="Repeat Password"
                    className="block outline-0 w-full border-b border-b-gray-300 py-3"
                  />
                </div>
              </div>
            </div>
            <hr className="border-0 h-[1px] bg-gray-300 my-15" />
            <p className="text-[#767676] text-sm">
              <input type="checkbox" /> I have read and agree to the Privacy
              Policy
            </p>
            <div className="text-[#767676] flex gap-x-5 my-7">
              <p>Subscribe Newsletter</p>
              <div className="space-x-2">
                <input type="radio" name="news" />
                <label htmlFor="">Yes</label>
              </div>
              <div className="space-x-2 ">
                <input type="radio" name="news" />
                <label htmlFor="">No</label>
              </div>
            </div>
            <Btn text={"Sign Up"} />
          </form>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
