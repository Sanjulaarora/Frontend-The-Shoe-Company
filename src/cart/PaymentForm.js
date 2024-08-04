import React from 'react';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import DataContext from '../context/DataContext';

const PaymentForm = () => {
  const {
    firstName, setFirstName, lastName, setLastName, email, setEmail, mobileNumber, setMobileNumber, address, setAddress, country, setCountry, city, setCity, myState, setMyState, pincode, setPincode, setTotalAmount, handleCheckoutSubmit
  } = useContext(UserContext);
  const { state: { cart } } = useContext(DataContext);
  const [total, setTotal] =useState();
  useEffect(() => {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.newPrice)*curr.qty, 0));
  }, [cart]);

  return (
    <>
      <section className="flex justify-center px-6 md:px-12 max-w-[1440px] mx-auto h-screen">
        <section className="mt-40 bg-slate-700 border-2 border-solid border-white rounded-md h-[350px] media450:h-[400px] media830:h-[520px] w-[280px] media450:w-[360px] media830:w-[430px]">
          <form className="flex flex-col justify-center space-y-3 media830:space-y-4 p-2 media830:p-3" onSubmit={ handleCheckoutSubmit }>
            <h1 className="text-center font-bold text-md media450:text-2xl media830:text-3xl mt-2"> Payment Checkout</h1>
            <div className="flex justify-between mt-3">
              <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="text" placeholder="Your First Name" required 
                value={firstName} onChange={(e) => setFirstName(e.target.value)}
              />
              <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="text" placeholder="Your Last Name" required 
                value={lastName} onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="email" placeholder="Your Email" required 
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="number" placeholder="Mobile Number" required 
              value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}
            />
            <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="text" placeholder="Address" required 
              value={address} onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex justify-between">
              <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="text" placeholder="Country" required 
                value={country} onChange={(e) => setCountry(e.target.value)}
              />
              <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="text" placeholder="City" required 
                value={city} onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="text" placeholder="State" required 
                value={myState} onChange={(e) => setMyState(e.target.value)}
              />
              <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="number" placeholder="Pincode" required 
                value={pincode} onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <input className="p-1 media830:p-2 rounded-md text-black text-[10px] media450:text-sm media830:text-base" type="number" placeholder="Total Amount" required 
              value={total} onChange={(e) => setTotalAmount(e.target.value)}
            />
            <button className="text-slate-700 font-bold text-xs media450:text-md bg-white h-8 media450:h-10 w-20 media450:w-36 media830:w-44 rounded-md mx-auto hover:scale-110" type="submit"> Checkout </button>
          </form>
        </section>
      </section>
    </>
  )
}

export default PaymentForm;