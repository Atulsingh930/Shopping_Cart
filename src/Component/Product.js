import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Redux/slices/CartSlice';

function Product({post}) {

    const {id, title, price, description, image} = post;
    const { cart } = useSelector((state)=>state);
    const dispatch = useDispatch();
    // const prductDescription = description.replace(/\s+/g, ' ');

    function removeFromCart(){
        dispatch(remove(id));
        toast.error("Iteam removed from cart")
    }

    function addFromCart(){
        dispatch(add(post));
        toast.success("Item is added ducce")
    }

  return (
    <div className='group mt-10'>
        <div className='p-4 mx-4 mt-10 ml-5 flex flex-col items-center justify-center gap-3 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-64 cursor-pointer transition-all ease-in duration-300  group-hover:scale-110 group-hover:shadow-[0px_0px_95px_53px_#00000024]'>
            <div className='text-lg  text-[#374151] font-semibold'>
                <p>{title.replaceAll("  ", " ").substring(0, 15)}...</p>
            </div>
            <div class="text-xs font-normal text-gray-400 w-40 text-justify h-[3rem] overflow-hidden line-clamp-3">
                <p class="m-0">{ description }</p>
            </div>

            <div className='h-[180px]'>
                <img className='w-full h-full object-contain' src= {image} alt="" />
            </div>
            <div className='w-full flex justify-between mt-5 text-base text-green-500 font-semibold'>
                <p>${price}</p>
                <button className='text-xs'>
                {
                    cart.some(p=>p.id===id) ? 
                    (<button className='border-[#374151] border-2 py-0.5 px-2 rounded-3xl text-[#374151] font-bold text-center transition-all duration-300 group-hover:bg-[#374151] group-hover:text-white'
                     onClick={removeFromCart}>
                        REMOVE ITEM
                    </button>) :
                    (<button className='border-[#374151] border-2 py-0.5 px-2 rounded-3xl text-[#374151] font-bold text-center transition-all duration-300 group-hover:bg-[#374151] group-hover:text-white'
                    onClick={addFromCart}>
                        ADD TO CART
                    </button>)
                }
            </button>
            </div>
        </div>
    </div>
  )
}

export default Product