import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const CarouselContents = ({ productSection }) => {

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
        <div className="nunito container mx-auto">
            {/* Section Title */}
            <div className="text-center mt-10 mb-16">
                <h2 className="text-4xl font-bold nunito">{productSection.heading}</h2>
            </div>

            {/* Flex container for image and product grid */}
            <div className="flex flex-wrap items-start gap-1 lg:flex-nowrap">
                {/* Highlighted Image */}
                <div className="relative bg-black">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                    <div className='h-[300px]'>
                        <img
                            src={productSection.leftImageURL}
                            alt="Mens-Fashion"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Centered Heading */}
                    <div
                        className="absolute inset-0 flex items-center justify-center outline outline-white outline-1 -outline-offset-[15px] transition-all duration-300 ease-in-out hover:outline-offset-0"
                    >
                        <h3 className="text-3xl font-bold text-white w-[200px] text-center">{productSection.subText}</h3>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="container w-3/4 h-[270px]">
                    <div className="carousel-container">
                        <div
                            className="carousel-wrapper"
                            style={{ transform: `translateX(-${currentSlide * (283.578 * 3 + 120)}px)` }}
                        >
                            {productSection.products.map((product, index) => (
                                <div key={index} className="carousel-item flex-none ml-[40px]">
                                    <div className="relative group">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="relative h-[190px] object-cover"
                                        />
                                        <div className="absolute right-0 top-2 m-4 flex flex-col gap-3">
                                            <Link to={product.links.reviews}>
                                                <i className=" fa-regular fa-eye bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[100ms] hover:bg-gray-700 hover:text-white" />
                                            </Link>
                                            <Link to={product.links.details}>
                                                <svg class="bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1zm18 5V4a1 1 0 0 0-1-1h-5v2h4v4h2zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2v4zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1h5zM2 11h20v2H2z">
                                                    </path>
                                                </svg>
                                            </Link>
                                            <Link to={product.links.buy}>
                                                <i className=" fa-regular fa-link bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white" />
                                            </Link>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-20 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                            <Link to={product.links.buy}>
                                                <button className="bg-gray-900 nunito text-white py-2 px-4 w-full custom-button">
                                                    Add To Cart
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="mt-6">
                                            <h3 className="font-bold text-pink-500 mb-2">{product.name}</h3>
                                            <p className="text-black">{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Dots Navigation */}
                        <div className="carousel-dots mb-16">
                            {productSection.products.map((_, index) => (
                                <>
                                    {index % 3 == 0 ? (<span
                                        key={index}
                                        className={`carousel-dot ${index / 3 === currentSlide ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index / 3)}
                                    ></span>) : ''}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselContents