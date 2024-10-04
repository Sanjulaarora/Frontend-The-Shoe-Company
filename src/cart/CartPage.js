import React, { Suspense } from 'react';
import SubTotalSidebar from './SubTotalSidebar';
import emptyCart from '../images/empty-cart.png';
import { useSelector } from 'react-redux';

const CartFeed = React.lazy(() => import('./CartFeed'));

const CartPage = () => {
  const { cart } = useSelector((state) => state.allCart);
  
  return (
    <>
      <section className="flex justify-between px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen">
        <section className="w-[60%] media830:w-4/6 mt-32 text-center">
          <ol>
            <Suspense fallback={<div>Loading...</div>}>
              <CartFeed />
            </Suspense>
          </ol> 
          {!(cart.length) &&
            <div className="mt-44 flex flex-col justify-center items-center">
              <p className="font-bold text-xs media450:text-xl media830:text-2xl">Your Cart is Empty.</p>
              <img className="w-20 media450:w-52 media830:w-64" src={emptyCart} alt="empty-cart" loading="lazy"/>
            </div>
          }
        </section>
        <SubTotalSidebar />
      </section>
    </>
  )
}

export default CartPage;