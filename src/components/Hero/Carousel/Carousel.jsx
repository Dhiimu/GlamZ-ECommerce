// Carousel.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHover, setIsHover] = useState(false);

    const slides = [
        {
            image: '/images/hero1.jpg',
            discount: 'Save Up To 50%',
            text: 'Our Styles Are Both Refined And Fashion Forward',
        },
        {
            image: '/images/hero2.jpg',
            discount: 'Exclusive Offer!',
            text: 'Elevate Your Wardrobe With Our Latest Collection',
        },
        {
            image: '/images/hero3.jpg',
            discount: 'Limited Time Sale!',
            text: 'Discover New Trends And Classic Styles',
        },
    ];

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0)
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(slides.length - 1)
        }
    };

    const handleHoverIn = () => {
        setIsHover(true)
    }

    const handleHoverOut = () => {
        setIsHover(false)
    }

    useEffect(() => {
        if(!isHover) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, isHover]);

    return (
        <div class="flex gap-0 mt-0 h-[80vh] w-full">
            <Sidebar />
            <div className="relative group flex w-3/4 overflow-hidden">
                <div className="carousel flex w-full h-auto">
                    {slides.map((slide, index) => (
                        <div key={index} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} className={`relative slide w-full flex-none transition-all ease-in-out duration-[2s]`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            <img
                                key={index}
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className={`carousel-item w-full h-auto object-cover`}
                            />

                            <div className="absolute inset-0 flex flex-col justify-center items-start p-10 bg-opacity-50">
                                <span className="text-pink-600 font-bold nunito text-sm">
                                    {slide.discount}
                                </span>
                                <h1 className="text-white text-4xl w-96 font-bold mt-5 mb-6 space-y-8 nunito">
                                    {slide.text}
                                </h1>
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-md">
                                    Shop Now
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute hidden top-[40%] right-8 flex flex-col gap-2 group-hover:flex">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="bg-white hover:bg-pink-500 hover:text-white p-3 cursor-pointer"
                        onClick={prevSlide}
                    />
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="bg-white hover:bg-pink-500 hover:text-white p-3 cursor-pointer"
                        onClick={nextSlide}
                    />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
