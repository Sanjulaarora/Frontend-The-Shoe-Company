import React from 'react';
import { FaCartPlus, FaCartShopping, FaStar } from 'react-icons/fa6';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Card = ({ item }) => {

  const { state:{ cart } , dispatch } = useContext(DataContext);

  const star= <FaStar className="text-amber-400 text-xs media450:text-base" />;
  return (
    <section className=" bg-[#efefef] text-black m-3 lg:m-5 border-2 border-solid border-[#efefef] rounded-lg p-3 lg:p-5 hover:scale-110 hover:bg-slate-700">
      <img className="w-40 media450:w-52 mb-4" src={ item.img } alt={item.title}/>
      <div>
        <h3 className="mb-2 media450:mb-4 text-xs media450:text-base font-semibold lg:font-bold underline">{item.title}</h3>
        <section className="flex justify-between mb-4 font-medium lg:font-semibold">
          <div className="flex pt-1">
            {star}{star}{star}{star}
          </div>
          <div className="text-[10px] media450:text-base">{item.reviews}</div>
        </section>
        <section className="flex justify-between">
          <div className="font-medium lg:font-semibold text-xs media450:text-base">
            <del>{item.prevPrice}</del> {item.newPrice}
          </div>
          <div className="pt-[2px] media450:pt-1 hover:scale-125 flex">
            {
              cart.some((p) =>p.id === item.id) ? (
                <FaCartPlus role="button" 
                  onClick = {() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    });
                  }}
                  className="w-3 media450:w-5"
                />
              ) :
              (
                <FaCartShopping role="button"
                  onClick = {() => {
                    dispatch({
                      type:"ADD_TO_CART",
                      payload: item,
                    });
                  }}
                  className="w-3 media450:w-5"
                />
              )
            }
          </div>
        </section>
      </div>
    </section>        
  )
}

export default Card;