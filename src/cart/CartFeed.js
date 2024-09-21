import React, { Suspense} from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const CartItem = React.lazy(() => import('./CartItem'));

const CartFeed = () => {
  const { state: { cart }} = useContext(DataContext);

  return (
    <>
      {cart.map((item) =>
        <Suspense fallback={<div>Loading...</div>}>
          <CartItem key={item.id} item={item} />
        </Suspense>
      )}
    </>
  )
}

export default CartFeed;