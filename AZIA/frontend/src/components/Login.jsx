import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/Logo.jpg';
import { API_END_POINT } from '../utils/constant.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/user/userSlice.js';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 // const [num, setNum] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    //setNum('');
    setPassword('');
  };

  const handleLoading = () => {
    setIsLoading(!isLoading);
  };

  const validateEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email ending with "@gmail.com"');
      return;
    }



    // Validate password
    if (!validatePassword(password)) {
      toast.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    if (isLogin) {
      // Login
      try {
        const res = await axios.post(
          `${API_END_POINT}/login`,
          { email, password },
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (res.data.message) {
          setIsLoading(!isLoading);
          toast.success(res.data.message);
          dispatch(addUser(res.data.user));
          navigate('/home');
        }
      } catch (error) {
        console.log(error);
        setIsLoading(!isLoading);
        toast.error(error.response.data.message);
      }
    } else {
      // Register
      try {
        const res = await axios.post(
          `${API_END_POINT}/register`,
          { name, email, password },
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (res.data.message) {
          setIsLoading(!isLoading);
          toast.success(res.data.message);
          setIsLogin(true);
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
        setIsLoading(!isLoading);
        toast.error(error.response.data.message);
      }
    }

    setName('');
    setEmail('');
    //setNum('');
    setPassword('');
  };

  return (
    <div>
      <div className='flex justify-between items-center mt-4'>
        <img className='w-45 h-39 cursor-pointer ml-4' src={logo} alt='logo-img' />
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex flex-col w-10/12 h-full m-auto mt-10 bg-skin-light border-2 border-solid rounded-xl p-5'>
            <h1 className='w-9/12 m-auto text-3xl font-medium mb-2'>{isLogin ? 'Sign in' : 'Sign up'}</h1>
            {!isLogin && (
              <input
                className='w-10/12 h-full m-auto p-2 mt-2 rounded-lg border-2 border-solid border-slate-600 outline-none font-medium'
                placeholder='Enter Name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              className='w-9/12 m-auto p-2 mt-2 rounded-lg border-2 border-solid border-slate-600 outline-none font-medium'
              placeholder='Enter Email'
              type='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input
              className='w-9/12 m-auto p-2 mt-2 rounded-lg border-2 border-solid border-slate-600 outline-none font-medium'
              placeholder='Enter Number'
              type='num'
              value={num}
              required
              onChange={(e) => setNum(e.target.value)}
            /> */}
            <input
              className='w-9/12 m-auto p-2 mt-2 rounded-lg border-2 border-solid border-slate-600 outline-none font-medium'
              placeholder='Enter password'
              type='password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='w-9/12 m-auto mt-4 p-2 font-medium bg-skin-dark rounded-lg hover:bg-skin-brown'
              type='submit'
              onClick={handleLoading}
            >
              {isLoading ? 'Loading....' : isLogin ? 'Sign in' : 'Sign up'}
            </button>
            {!isLogin && <p className='mt-3 m-auto text-gray-500'>--------New to AZIA?--------</p>}
            <p className='w-9/12 m-auto mt-3 p-2 pl-6 rounded-lg bg-skin-dark hover:bg-skin-brown cursor-pointer' onClick={handleClick}>
              {isLogin ? 'Create your AZIA Account' : 'Already have an account?'}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
