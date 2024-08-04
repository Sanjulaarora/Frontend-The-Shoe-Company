import React from 'react';
import PaymentForm from '../cart/PaymentForm';
import { UserProvider } from '../context/UserContext';

const Payment = () => {
  return (
    <UserProvider>
      <main id="payment" className="grow">
        <PaymentForm />
      </main>
    </UserProvider>
  )
}

export default Payment;