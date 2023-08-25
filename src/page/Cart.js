import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Component/CartItem'
import { NavLink } from 'react-router-dom';

function Cart() {

  const {cart} = useSelector((state)=>state);
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    settotalAmount(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0));
    // cart.reduce((accumulator, product) => accumulator + product.price, 0);
    console.log(cart)
  }, [cart])
  

  return (
    <div className='max-w-[1200px] w-[90%] mx-auto '>
      {
        cart.length > 0 ? 
        (
          <div className='flex justify-between w-full mb-5'>
            <div className=' w-[60%]'>
              {
                cart.map((item, index)=>(<CartItem item={item} index={index} key={item.id}/>))
              }
            </div>
            <div className='flex flex-col justify-between items-start w-[35%] mt-24 mr-14'>
              <div className='text-justify'>
                <div className='text-green-800 text-xl font-semibold'>YOUR CART</div>
                <div className='text-green-700 text-6xl text-[3.1rem]  font-semibold'>SUMMARY</div>
                <p className='mt-4'><span className='text-[#334155] text-xl font-semibold'>Total Items</span>: {cart.length}</p>
              </div>
              <div className='w-full text-justify mt-5'>
                <p className='font-bold text-xl'><span className='text-[#334155] text-xl font-semibold'>Total Amount: </span>${totalAmount}</p>
                <button className='w-full py-3 rounded-md text-xl font-bold text-white bg-green-700 mt-5'>
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ) : 
        (
          <div>
            <h1>Cart Empty</h1>
            <NavLink to={'/'}>
              <button className='bg-red-500 px-2 py-5'>Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart