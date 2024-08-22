import React from 'react'
import Logo from '../util/Logo'

const Footer = () => {
    return (
        <>
            <div class="bg-[#FFF8F0] mt-16 py-16 ">

                {/* Upper division */}
                <div class="flex mx-10 items-center pb-6  ">
                    <div class=" flex flex-col gap-2 flex-1">
                        <h2 class="text-3xl font-bold nunito">Subscribe Now</h2>
                        <p class="nunito-light font-bolder">Subscribe for getting our latest items update regularly</p>
                    </div>
                    <div class="flex w-1/2 flex-1">
                        <input
                            type="email"
                            placeholder="Your email address"
                            class="px-4 py-3 grow border focus:outline-none focus:ring-1 focus:ring-pink-500"
                        />
                        <button class="bg-pink-500  text-white px-6 py-3">Sign up</button>
                    </div>


                </div>

                {/* Lower division */}

                <div class="grid grid-cols-1 md:grid-cols-4 mt-4 mx-10 gap-8 nunito  ">
                    {/* <!-- Brand Info --> */}
                    <div class="flex flex-col items-center gap-3 md:items-start ">
                        <Logo />
                        <p class="text-gray-900 font-semibold text-sm text-center md:text-left">Lorem ipsum dolor, sit amet earum consectetur adipiscing elit. Cupiditate rerum quidem fugit sapiente! Iusto quae perspiciatis amet earum.</p>
                        <div class="flex space-x-4 mt-4">
                            {/* <!-- Social Icons --> */}
                            <a href="#" class="bg-pink-500 text-white rounded-full w-8 h-8 relative transform transition duration-200 hover:-translate-y-1">
                                <i class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="bg-pink-500 text-white rounded-full w-8 h-8 relative transform transition duration-200 hover:-translate-y-1">
                                <i class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fab fa-x-twitter"></i>
                            </a>
                            <a href="#" class="bg-pink-500 text-white rounded-full w-8 h-8 relative transform transition duration-200 hover:-translate-y-1">
                                <i class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fab fa-instagram"></i>
                            </a>
                            <a href="#" class="bg-pink-500 text-white rounded-full w-8 h-8 relative transform transition duration-200 hover:-translate-y-1">
                                <i class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="bg-pink-500 text-white rounded-full w-8 h-8 relative transform transition duration-200 hover:-translate-y-1">
                                <i class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fab fa-youtube"></i>
                            </a>
                        </div>

                    </div>

                    {/* <!-- Quick Links -->/ */}
                    <div class="px-6 border-gray-300 border-l-[1.5px] ">
                        <h3 class="text-lg font-semibold mb-4">QUICK LINKS</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="font-semibold text-gray-800 text-sm hover:text-pink-500">Privacy Policy</a></li>
                            <li><a href="#" class="font-semibold text-gray-800 text-sm hover:text-pink-500">Terms and Conditions</a></li>
                            <li><a href="#" class="font-semibold text-gray-800 text-sm hover:text-pink-500">Refund and Returns Policy</a></li>
                            <li><a href="#" class="font-semibold text-gray-800 text-sm hover:text-pink-500">Affiliate Program</a></li>
                            <li><a href="#" class="font-semibold text-gray-800 text-sm hover:text-pink-500">Become A Vendor</a></li>
                            <li><a href="#" class="font-semibold text-gray-800 text-sm hover:text-pink-500">Career Opportunity</a></li>
                        </ul>
                    </div>
                    {/* 
      <!-- Opening Hours --> */}
                    <div class="pl-6 border-gray-300 border-l-[1.5px] pb-5">
                        <h3 class="text-lg font-semibold mb-4">OPENING HOURS</h3>
                        <div class="flex flex-col ">
                            <div class="flex justify-between border-gray-300 border-b-[1.5px] py-2">
                                <div class="font-semibold text-gray-800 text-sm"><p>Mon-Tue:</p></div>
                                <div class="font-semibold text-gray-800 text-sm"><p>6:00AM-10:00PM</p></div>
                            </div>
                            <div class="flex justify-between border-gray-300 border-b-[1.5px] py-2">
                                <div class="font-semibold text-gray-800 text-sm"><p>Wed-Thu:</p></div>
                                <div class="font-semibold text-gray-800 text-sm"><p>6:00AM-10:00PM</p></div>
                            </div>
                            <div class="flex justify-between border-gray-300 border-b-[1.5px] py-2">
                                <div class="font-semibold text-gray-800 text-sm"><p>Fri:</p></div>
                                <div class="font-semibold text-gray-800 text-sm"><p>6:00AM-10:00PM</p></div>
                            </div>
                            <div class="flex justify-between border-gray-300 border-b-[1.5px] py-2">
                                <div class="font-semibold text-gray-800 text-sm"><p>Sat:</p></div>
                                <div class="font-semibold text-gray-800 text-sm"><p>6:00AM-10:00PM</p></div>
                            </div>
                            <div class="flex justify-between border-gray-300 border-b-[1.5px] py-2">
                                <div class="font-semibold text-sm"><p>Sun:</p></div>
                                <div class="font-semibold text-sm"><p>6:00AM-10:00PM</p></div>
                            </div>

                        </div>
                    </div>
                    {/* 
      <!-- Get In Touch --> */}
                    <div class="px-6 border-gray-300 border-l-[1.5px]">
                        <h3 class="text-lg font-semibold mb-4">GET IN TOUCH</h3>
                        <ul class="text-gray-800 text-sm ">
                            <li class="flex items-center  "><i class="far fa-map-marker-alt text-lg  text-pink-500 mr-2"></i>Address:</li>
                            <p className='ml-6 text-gray-800 rubik mb-1'>124 Western Road, MacLeay Island QLD, Australia</p>
                            <li class="flex items-center "><i class="far fa-envelope  text-lg text-pink-500 mr-2"></i>Email:</li>
                            <p className='ml-6 text-gray-800 rubik mb-1'>hello@example.com</p>
                            <li class="flex items-center "><i class="far fa-phone  text-lg text-pink-500 mr-2"></i>Hotline:</li>
                            <p className='ml-6 text-gray-800 rubik mb-1'>+1 1234567898</p>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer