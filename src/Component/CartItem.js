import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

function CartItem({item, index}) {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch()
  function removeFromCart(){
    dispatch(remove(item.id))
    toast.success("Item is removed from cart")
  }

  console.log(index, item)

  return (
    <div className={`w-full px-10 mt-10 ${cart.length > 1 ? (index < cart.length-1 ? "border-b-2 border-[#334155]" : "") : ""} pb-8`}>
       <div className='flex justify-between items-center w-full'>
        <div className='w-[28%]'>
          <img className='object-contain' src={item.image} alt=''/>
        </div>
        <div className='w-[70%] pl-14 text-justify mr-14'>
          <h1 className='text-[#334155] text-xl  font-semibold'>{item.title}</h1>
          <h1 className='text-[#334155] mt-5 text-base'>{item.description.substring(0, 85)}...</h1>
          <div className='w-full flex justify-between items-center mt-8'>
            <p className='text-green-600 text-lg font-semibold'>${item.price}</p>
            <div className='bg-red-200 h-10 w-10 flex justify-center items-center rounded-3xl cursor-pointer' onClick={removeFromCart}>
              <MdDelete className='text-base text-red-900'/>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default CartItem