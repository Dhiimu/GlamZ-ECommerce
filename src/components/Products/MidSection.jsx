import React from 'react'

const MidSection = () => {
  return (
    <>
      <div className='flex mx-auto gap-10 px-10'>
        <div className=' w-1/2 h-fit'>
          <div class="bg-pink-50 pt-4 text-center ">
          {/* /  <!-- Title --> */}
          <p class="text-pink-500 font-medium text-xl tracking-wide mt-8">Deal of the week</p>
          <h2 class="text-[2.2rem] mx-1 font-bolder text-gray-800 mt-2 nunito-sans-medium tracking-[8px] subpixel-antialiased">New Fashionable Items</h2>
          {/* 
  <!-- Countdown Timer --> */}
          <div class="flex justify-center space-x-4 mt-6">
            <div class="bg-white shadow rounded p-2">
              <p class="text-2xl nunito-sans-medium font-bold">466</p>
              <p class="text-gray-800 text-md nunito ">Days</p>
            </div>
            <div class="bg-white shadow rounded p-2">
              <p class="text-2xl nunito-sans-medium font-bold">08</p>
              <p class="text-gray-800 text-md nunito ">Hours</p>
            </div>
            <div class="bg-white shadow rounded p-2">
              <p class="text-2xl nunito-sans-medium font-bold">00</p>
              <p class="text-gray-700 text-md  ">Minutes</p>
            </div>
            <div class="bg-white shadow rounded p-2">
              <p class="text-2xl nunito-sans-medium font-bold">25</p>
              <p class="text-gray-700 text-md  ">Seconds</p>
            </div>
          </div>

          <button class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-md mt-8">
            <i class="fa-regular fa-shopping-bag mr-2"></i> Shop Now
          </button>

          <div class="mt-8">
            <img src="https://haine.mhrtheme.com/wp-content/uploads/2022/07/product-box-1.png" alt="Fashionable Items" class="mx-auto" />
          </div>
        </div></div>

        {/* second half */}
        <div className='w-1/2 h-vh'><div class=" bg-white">
          {/* <!-- Section Header --> */}
          <div class="flex flex- col gap-4 items-center justify-center text-center mt-4 mb-10">
          <div class="w-24 border-t-[3px]  mt-2 rounded-lg  border-gray-300 mx-2"></div>
            <h2 class="text-4xl font-bold text-gray-800 nunito">Best Seller Products</h2>
            <div class="w-24 border-t-[3px]  mt-2 mb-2 rounded-lg border-gray-300 mx-2"></div>
           
          
          </div>

          {/* <!-- Product Grid --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto">
            {/* <!-- Product 1 --> */}
            <div >
              <div class="relative group ">
                <img src="https://haine.mhrtheme.com/wp-content/uploads/2022/06/product-13.jpg"
                  alt="Product 1" class="relative object-cover" />
                <div class="absolute right-0 top-2 m-4 flex flex-col gap-3">
                  <a href="#">
                    <i
                      class="fa-regular fa-eye bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[100ms] hover:bg-gray-700 hover:text-white"></i>
                  </a>
                  <a href="#">
                    <svg class="bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none"
                      viewBox="0 0 24 24">
                      <path
                        d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1zm18 5V4a1 1 0 0 0-1-1h-5v2h4v4h2zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2v4zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1h5zM2 11h20v2H2z">
                      </path>
                    </svg>
                  </a>
                  <a href="#">
                    <i
                      class="fa-regular fa-link bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"></i>
                  </a>
                </div>
                <div
                  class="absolute inset-x-0 bottom-20 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <a href="#"> <button class="bg-gray-900 nunito text-white py-2 px-4 w-full custom-button">
                    Add To Cart
                  </button></a>
                </div>
                <div class="mt-6">
                  <h3 class="font-bold text-pink-500 mb-2">Product 1</h3>
                  <p class="text-black">50.00$</p>
                </div>
              </div>
            </div>

            {/* <!-- Product 2 --> */}
            <div >
              <div class="relative group ">
                <img src="https://haine.mhrtheme.com/wp-content/uploads/2022/06/product-13.jpg"
                  alt="Product 1" class="relative  object-cover" />
                <div class="absolute right-0 top-2 m-4 flex flex-col gap-3">
                  <a href="#">
                    <i
                      class="fa-regular fa-eye bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[100ms] hover:bg-gray-700 hover:text-white"></i>
                  </a>
                  <a href="#">
                    <svg class="bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none"
                      viewBox="0 0 24 24">
                      <path
                        d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1zm18 5V4a1 1 0 0 0-1-1h-5v2h4v4h2zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2v4zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1h5zM2 11h20v2H2z">
                      </path>
                    </svg>
                  </a>
                  <a href="#">
                    <i
                      class="fa-regular fa-link bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"></i>
                  </a>
                </div>
                <div
                  class="absolute inset-x-0 bottom-20 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <a href="#"> <button class="bg-gray-900 nunito text-white py-2 px-4 w-full custom-button">
                    Add To Cart
                  </button></a>
                </div>
                <div class="mt-6">
                  <h3 class="font-bold text-pink-500 mb-2">Product 1</h3>
                  <p class="text-black">50.00$</p>
                </div>
              </div>
            </div>

            {/* Product 3 */}

            <div class="relative group ">
              <img src="https://haine.mhrtheme.com/wp-content/uploads/2022/06/product-13.jpg"
                alt="Product 1" class="relative object-cover" />
              <div class="absolute right-0 top-2 m-4 flex flex-col gap-3">
                <a href="#">
                  <i
                    class="fa-regular fa-eye bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[100ms] hover:bg-gray-700 hover:text-white"></i>
                </a>
                <a href="#">
                  <svg class="bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none"
                    viewBox="0 0 24 24">
                    <path
                      d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1zm18 5V4a1 1 0 0 0-1-1h-5v2h4v4h2zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2v4zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1h5zM2 11h20v2H2z">
                    </path>
                  </svg>
                </a>
                <a href="#">
                  <i
                    class="fa-regular fa-link bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"></i>
                </a>
              </div>
              <div
                class="absolute inset-x-0 bottom-20 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a href="#"> <button class="bg-gray-900 nunito text-white py-2 px-4 w-full custom-button">
                  Add To Cart
                </button></a>
              </div>
              <div class="mt-6">
                <h3 class="font-bold text-pink-500 mb-2">Product 1</h3>
                <p class="text-black">50.00$</p>
              </div>
            </div>
         

          {/* Product 4 */}
          <div class="relative group ">
            <img src="https://haine.mhrtheme.com/wp-content/uploads/2022/06/product-13.jpg"
              alt="Product 1" class="relative object-cover" />
            <div class="absolute right-0 top-2 m-4 flex flex-col gap-3">
              <a href="#">
                <i
                  class="fa-regular fa-eye bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[100ms] hover:bg-gray-700 hover:text-white"></i>
              </a>
              <a href="#">
                <svg class="bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none"
                  viewBox="0 0 24 24">
                  <path
                    d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1zm18 5V4a1 1 0 0 0-1-1h-5v2h4v4h2zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2v4zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1h5zM2 11h20v2H2z">
                  </path>
                </svg>
              </a>
              <a href="#">
                <i
                  class="fa-regular fa-link bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"></i>
              </a>
            </div>
            <div
              class="absolute inset-x-0 bottom-20 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <a href="#"> <button class="bg-gray-900 nunito text-white py-2 px-4 w-full custom-button">
                Add To Cart
              </button></a>
            </div>
            <div class="mt-6">
              <h3 class="font-bold text-pink-500 mb-2">Product 1</h3>
              <p class="text-black">50.00$</p>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>


    </>
  )
}

export default MidSection