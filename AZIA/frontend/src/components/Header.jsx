import React, { useState } from 'react';
import sub_logo from '../assets/sub_logo.jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { removeUser } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT, supportLanguage } from '../utils/constant';
import { addLanguage } from '../features/language/languageSlice';
import { languagePrefernce } from '../utils/languages';
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
//import latestAZIA from './latestAZIA';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lang = useSelector((s) => s?.language?.language);
    const cart = useSelector((s) => s?.cart?.cartProduct);
    const product = useSelector((s) => s?.product?.products);
    const [val, setVal] = useState("");

    const handleLogout = async () => {
        try {
            const res = await axios.get(`${API_END_POINT}/logout`);
            if (res.data.success) {
                dispatch(removeUser());
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogoClick = () => {
        navigate("/home");
    };

    const handleSearchOption = (e) => {
        dispatch(addLanguage(e.target.value));
    };

    return (
        <div>
            <div className='bg-skin-brown flex justify-between items-center'> {/* Change bg-gray-800 to bg-skin-brown */}
                <div className='flex items-center'>
                    <div className='pt-1 ml-3 mr-1'>
                        <img
                            className='w-35 h-20 m-1 p-1 pl-2 cursor-pointer'
                            src={sub_logo}
                            alt="logo"
                            onClick={handleLogoClick} />
                    </div>
                    <div className='flex flex-col p-1'>
                        <HiOutlineLocationMarker
                            className='mt-2 ml-4 text-white w-5 h-7 cursor-pointer' />
                        <span className='text-white text-sm font-medium cursor-pointer'>{languagePrefernce[lang].city}</span>
                    </div>
                </div>

                {/* <div>
                    <div className='ml-2 mr-2 pt-3 pr-1 pb-3 pl-1'>
                        <form onSubmit={(e) => e.preventDefault()}
                            className='ml-16 flex w-[500px] h-[60px] items-center'>
                            <input
                                className='w-8/12 h-[38px] pl-3 p-2 rounded-lg outline-none font-sans'
                                type="text"
                                value={val}
                                placeholder={languagePrefernce[lang].searchPlaceholder}
                                onChange={(e) => { setVal(e.target.value) }}
                            />
                            <button>
                                <IoSearchOutline
                                    className='w-8 p-1 h-[38px] ml-[2px] rounded-lg bg-skin-dark hover:bg-yellow-500' />
                            </button>
                        </form>
                    </div>
                </div> */}

                <div className='flex '>
                    <div className='flex justify-between items-center mt-1 pt-1 m-2 font-medium'>
                        <div className='text-white mr-2'>
                            <Link to="/home">Home</Link>
                        </div>
                        {/* <div className='text-skin-dark mr-2'>
                            <Link to="/latestAZIA">Latest-AZIA</Link>
                        </div> */}
                        <div className='text-white mr-2'>
                            <Link to="/about">About</Link>
                        </div>
                        <div className='text-white mr-2'>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <select
                            onChange={handleSearchOption}
                            className=' mr-3 p-1 w-[99px] rounded-md cursor-pointer'>
                            {supportLanguage.map((language) => (
                                <option key={language.identifier} value={language.identifier}>{language.name}</option>
                            ))}
                        </select>

                        <FiShoppingCart className='text-white text-3xl cursor-pointer'
                            onClick={() => { navigate("/cart") }}
                        />
                        <div className='text-orange-500 mb-8 font-bold text-lg'>{cart.length}</div>
                        <Link to="/cart" className='mr-2 text-white hover:'>{languagePrefernce[lang].cart}</Link>

                        <div className='mr-1'>
                            <Link to="/wishlist"><CiHeart className='w-7 h-7 cursor-pointer text-gray-900 bg-skin-dark hover:bg-skin-soft rounded-lg' /></Link>
                        </div>

                        <div className='flex flex-col mr-4 mb-5 items-center'>
                            <RxAvatar className='text-white w-5 h-5 cursor-pointer' />
                            <button
                                className='bg-skin-dark rounded-lg py-1 px-2 text-black hover:bg-skin-soft' onClick={handleLogout}>Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
