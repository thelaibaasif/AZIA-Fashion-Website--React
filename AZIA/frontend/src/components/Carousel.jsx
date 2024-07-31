import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from '../assets/video1.mp4'; // Import the videos
import video2 from '../assets/video2.mp4'; // Import the videos
import video3 from '../assets/video3.mp4'; // Import the videos
import video4 from '../assets/video4.mp4'; // Import the videos

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed in milliseconds
  };

  return (
    <div className='bg-gradient-to-br from-skin-light'>
      <div className='w-11/12 m-auto'>
        <div className='mt-1'>
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className='flex'>
                <video className='p-1 w-[800%] h-[500px] rounded-xl' autoPlay loop muted controls={false}>
                  <source src={d.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    video: video1 // Use the imported video instead of the image URL
  },
  {
    video: video2 // Use the imported video instead of the image URL
  },
  {
    video: video3 // Use the imported video instead of the image URL
  },
  {
    video: video4 // Use the imported video instead of the image URL
  },
  // Add more videos here if needed
];

export default Carousel;
