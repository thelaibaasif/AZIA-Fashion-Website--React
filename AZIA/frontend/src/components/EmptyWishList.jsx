import React from 'react'
import { ImSad } from "react-icons/im";
import { EMPTY_CART_IMAGE } from '../utils/constant';
import { IoIosReturnLeft } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import bg8 from '../assets/bg8.jpg'
const EmptyWishList = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/cart")
    }
    return (
        <div>

            <div className='w-full absolute '>
                <img src={bg8} className='w-full h-[100vh]' alt="" />
                <div className='absolute top-[30%] left-[10%] w-6/12 items-center flex flex-col'>
                    <ImSad className='text-center text-yellow-800 w-12 h-12 mb-2' />
                    <h1 className='text-black text-3xl font-serif mb-2'>Your Wishlist is empty</h1>
                    <div className='flex items-center bg-skin-brown p-3 rounded-xl hover:bg-skin-light cursor-pointer' onClick={handleCartClick}>
                        <IoIosReturnLeft className='w-6 h-6 text-white mr-2' />
                        <button className='text-white text-lg font-sans'>RETURN TO CART</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EmptyWishList