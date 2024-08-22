// Hero.jsx
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Carousel from './Carousel/Carousel';

const Hero = () => {
    return (
        <div className="flex gap-0 mt-0 m-10 h-[85vh]">
           
            <Carousel /> 
        </div>
    );
};

export default Hero;
