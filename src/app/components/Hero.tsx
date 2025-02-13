"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  
    const settings = { 
        dots: true,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    
    const slideData = [
        {
            id: 1,
            image: "/banner1.jpg",
            title: "Trending Item",
            text: "WOMENS'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 2,
            image: "/banner-2.jpg",
            title: "Trending Accessories",
            text: "MODERN SUNGLASSES",
            price: "$15",
        },
        {
            id: 3,
            image: "/banner-3.jpg",
            title: "Sale Offer",
            text: "NEW FASHION SUMMER SALE",
            price: "$30",
        },
    ];

    return (
        <div>
            <div className='container pt-6 lg:pt-0 '>
                <Slider {...settings}> 
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            text={item.text}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Hero;