import React, { Suspense } from 'react';

const CartPage = React.lazy(() => import('../cart/CartPage'));

const Cart = () => {
  
  return (
    <main className="grow">
      <Suspense fallback={<div>Loading...</div>}>
        <CartPage />
      </Suspense>
    </main>
  )
}

export default Cart;