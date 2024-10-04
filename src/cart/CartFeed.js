import React, { Suspense} from 'react';
import { useSelector } from 'react-redux';

const CartItem = React.lazy(() => import('./CartItem'));

const CartFeed = () => {
  const {cart} = useSelector((state) => state.allCart);
  
  return (
    <>
      {cart.map((item) =>
        <Suspense fallback={<div>Loading...</div>} key={item.id} >
          <CartItem key={item.id} item={item} />
        </Suspense>
      )}
    </>
  )
}

export default CartFeed;