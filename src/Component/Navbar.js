import React from 'react'
import logo from '../Assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

    const {cart} = useSelector(state=>state);

  return (
    <div className='flex justify-center bg-[#0f172a] py-3'>
        <div className='flex flex-row justify-between w-full max-w-6xl'>
            <NavLink to='/'><img className='h-14' src={logo} alt="" /></NavLink>
            <div className='w-28 flex justify-between items-center'>
                <NavLink to='/'>
                    <p className='text-white text-lg font-medium transition duration-50 hover:text-green-600'>Home</p>
                </NavLink>
                <NavLink to='/cart'>
                    <div className='relative'>
                    <FaShoppingCart className='text-white text-2xl'/>
                    <div className={`absolute animation text-white bg-green-600 ${cart.length===0 ? 'hidden' : 'block'} bottom-3 left-4 h-4 w-4 text-xs rounded-lg`}>
                        {cart.length}
                    </div>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar