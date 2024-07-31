import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { ABOUT_AVTAAR } from '../utils/constant';

const About = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user?.userDetails);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const handleGithubClick = () => {
    window.open('https://github.com/');
  };

  const handleLinkdinClick = () => {
    window.open('https://www.linkedin.com/in/');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/.7?mibextid=ZbWKwL');
  };

  const handleInstgramClick = () => {
    window.open("https://www.instagram.com/");
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('src/assets/bg1.jpg')` }}>
      <div className='m-2 p-2 flex gap-2 justify-between'>
        <div className='flex flex-col items-center w-5/12'>{/** Photo and name*/}
            <div className='w-8/12'>
              
            </div>
            <div className='w-4/12'>
              <h1 className='p-2 text-center font-serif font-medium  text-xl'></h1>
            </div>
        </div>

        <div className='flex flex-col w-7/12 mt-[4%]'>{/**details*/}
            <div className='bg-skin-light hover:bg-skin-brown flex items-center mb-2 w-3/12 border border-skin-brown rounded-xl cursor-pointer' onClick={handleGithubClick}>
                <div className='p-1 m-1'>
                  <FaGithub  className='w-9 h-9'/>
                </div>
                <div className='p-1 m-1'>
                  <h1 className='font-semibold text-lg'>Github</h1>
                </div>
            </div>


            <div className='bg-skin-light hover:bg-skin-brown flex items-center mb-2 w-3/12 border border-skin-brown rounded-xl cursor-pointer' 
            onClick={handleLinkdinClick}>
                <div className='p-1 m-1'>
                  <FaLinkedin  className='w-9 h-9 text-blue-600'/>
                </div>
                <div className='p-1 m-1'>
                <h1 className='font-semibold text-lg'>Linkedin</h1>
                </div>
            </div>


            <div className='bg-skin-light hover:bg-skin-brown flex items-center mb-2 w-3/12 border border-skin-brown rounded-xl cursor-pointer'
            onClick={handleFacebookClick}>
                <div className='p-1 m-1'>
                  <FaFacebookSquare  className='w-9 h-9 text-blue-600'/>
                </div>
                <div className='p-1 m-1'>
                <h1 className='font-semibold text-lg'>Facebook</h1>
                </div>
            </div>


            <div className='bg-skin-light hover:bg-skin-brown flex items-center mb-2 w-3/12 border border-skin-brown rounded-xl cursor-pointer'
            onClick={handleInstgramClick}>
                <div className='p-1 m-1'>
                  <FaInstagramSquare  className='w-9 h-9 text-rose-600'/>
                </div>
                <div className='p-1 m-1'>
                <h1 className='font-semibold text-lg'>Instagram</h1>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About
