import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const CartItem = ({item}) => {
    const { dispatch } = useContext(DataContext);

  return (
    <div>
        <li key={item.id} className="flex justify-between mr-2 media450:mr-0 mt-4 bg-slate-50 text-black rounded-md h-[60px] media450:h-20 media830:h-24 p-2 media830:p-5">
            <div className="w-16 mt-2 media830:mt-0">
                <img src={ item.img } alt={item.title}/>
            </div>  
            <span className="p-1 media830:p-2 text-[8px] media450:text-base font-medium media830:font-semibold ml-2 media450:ml-6 media830:ml-10 w-20 media450:w-40 media830:w-52">{item.title} </span>
            <span className="text-[8px] media450:text-base w-14 media830:w-20 p-1 media830:p-2 ml-2 media450:ml-7 media830:ml-10">Rs. {item.newPrice}</span>
            <div className="text-[8px] media450:text-base p-1 media830:p-2 ml-2 media450:ml-7 media830:ml-10">
                <label htmlFor="qty">qty </label>
                <input className="w-4 media450:w-14 media830:w-20 border-2 border-black pl-[2px]" list="qty" 
                    type="select" 
                    value={item.qty} 
                    onChange={(e) =>
                    dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                        id: item.id,
                        qty:  e.target.value,                     
                        }, 
                    })}
                />
            </div>
            <FaTrash role="button" 
            onClick={() => 
                dispatch({
                type: "REMOVE_FROM_CART",
                payload: item,
                })
            } 
            className="text-[10px] media450:text-base mt-4 media450:mt-5 media830:mt-3 ml-2 media450:ml-7 media830:ml-10 hover:scale-125" />
        </li>
    </div>
  )
}

export default CartItem;