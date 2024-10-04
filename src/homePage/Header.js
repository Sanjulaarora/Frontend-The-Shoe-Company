import React from 'react';
import img1 from '../images/shoe-company-logo.png';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cart } = useSelector((state) => state.allCart);

  return (
    <header className="flex justify-between items-center px-8 media450:px-6 md:px-12 fixed w-full max-w-[1440px] mx-auto left-[50%] -translate-x-[50%] bg-black/70 backdrop-blur-sm z-10">
      <div>
        <img className="w-20 media450:w-24 media830:w-32" src={img1} alt={"logo"} loading="lazy"/>
        <p className="text-[10px] media830:text-sm -mt-5 media830:-mt-8">The Shoe Company</p>
      </div>
      <div className="flex text-[12px] lg:text-2xl font-bold">
        <Link to='/the-shoe-company'>
          <button className="mr-2 media450:mr-4 hover:underline hover:scale-110">Home</button>
        </Link>
        <Link to='/collections'>
          <button className="mr-2 media450:mr-4 hover:underline hover:scale-110">Collections</button>
        </Link> 
        <Link to='/cart'>
          <button className="flex bg-slate-700 border-2 border-solid border-white rounded-lg w-6 media450:w-8 lg:w-12 p-[2px] media450:p-1 lg:p-[6px] text-[7px] media450:text-[10px] media830:text-xs hover:scale-110">
            <FaCartShopping className="text-md media450:text-xl mt-[1px] media450:mt-0 mr-[2px]"/> 
            { cart.length } 
          </button> 
        </Link>
      </div>
    </header>
  )
}

export default Header;