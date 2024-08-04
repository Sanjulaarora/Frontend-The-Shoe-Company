import React from 'react';
import CartItem from './CartItem';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const CartFeed = () => {
  const { state: { cart }} = useContext(DataContext);

  return (
    <>
      {cart.map((item) =>
        <CartItem key={item.id} item={item} />
      )}
    </>
  )
}

export default CartFeed;