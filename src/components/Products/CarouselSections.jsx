import React, { useState } from 'react';

import productsSection from '../../data/menscarousel.json'
import MidSection from './MidSection';
import CarouselContents from './CarouselContents';

const CarouselSections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev * 3 + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className='flex flex-col gap-16 mx-auto w-fit'>

      {productsSection.map((productSection, index) => (
        <>
          {index === 2 ? <><MidSection /><CarouselContents productSection={productSection} /></> : <CarouselContents productSection={productSection} />}
        </>
      ))}
    </div>
  );
};

export default CarouselSections;
