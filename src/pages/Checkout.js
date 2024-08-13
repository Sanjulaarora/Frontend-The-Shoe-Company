import React from 'react';
import { UserProvider } from '../context/UserContext';

const Checkout = () => {
  return (
    <UserProvider>
      <main id="checkout" className="grow">
        Checkout
      </main>
    </UserProvider>
  )
}

export default Checkout;