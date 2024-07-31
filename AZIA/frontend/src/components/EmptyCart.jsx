
import React from 'react'
import { ImSad } from "react-icons/im";
import { IoIosReturnLeft } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import bg9 from '../assets/bg9.jpg'
const EmptyCart = () => {
     const navigate = useNavigate();

     const handleCartClick = () => {
        navigate("/home")
     }

  return (
    <div>
        <div className='w-full absolute '>
        <img src={bg9} className='w-full h-[100vh]' alt="" />
        <div className='absolute top-[30%] left-[10%] w-6/12 items-center flex flex-col'>
            <ImSad className='text-center text-yellow-800 w-12 h-12 mb-2'/>
            <h1 className='text-white text-3xl font-serif mb-2'>Your cart is empty</h1>
            <p className='text-white text-2xl mb-2'>Add some items to your cart to get started!</p>
            <div className='flex items-center bg-skin-brown p-3 rounded-xl hover:bg-skin-light cursor-pointer' onClick={handleCartClick}>
            <IoIosReturnLeft className='w-6 h-6 text-white mr-2'/>
            <button className='text-white text-lg font-sans'>RETURN TO SHOP</button>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default EmptyCart
