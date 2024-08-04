import React from 'react'
import { useContext } from 'react';
import CartFeed from './CartFeed';
import SubTotalSidebar from './SubTotalSidebar';
import emptyCart from '../images/empty-cart.png';
import DataContext from '../context/DataContext';

const CartPage = () => {
  const { state: { cart }} = useContext(DataContext);
  
  return (
    <>
      <section className="flex justify-between px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen">
        <section className="w-[60%] media830:w-4/6 mt-32 text-center">
          <ol>
            <CartFeed />
          </ol> 
          {!(cart.length) &&
            <div className="mt-44 flex flex-col justify-center items-center">
              <p className="font-bold text-xs media450:text-xl media830:text-2xl">Your Cart is Empty.</p>
              <img className="w-20 media450:w-52 media830:w-64" src={emptyCart} alt="empty-cart" />
            </div>
          }
        </section>
        <SubTotalSidebar />
      </section>
    </>
  )
}

export default CartPage