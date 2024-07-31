import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LatestFashion = () => {
  const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    // Add more image paths as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="latest-fashion">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={require(`../assets/${img}`).default} alt={`Fashion ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default latestAZIA;
