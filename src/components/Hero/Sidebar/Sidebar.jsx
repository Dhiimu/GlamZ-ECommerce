// Sidebar.jsx
import React from 'react';
import Mensdropdown from './Dropdowns/Mensdropdown';
import Womensdropdown from './Dropdowns/Womensdropdown';
import Kidsdropdown from './Dropdowns/Kidsdropdown';


const Sidebar = () => {
    return (
        <div class="w-1/4 h-[80vh] bg-white flex flex-col z-10">
            <ul class="border flex-grow">
                <li class="flex justify-between align-middle text-center text-pink-500 items-center text-lg font-bold nunito border-b px-6 py-3">
                    SHOP BY CATEGORY
                </li>
                <Mensdropdown />
                <Womensdropdown />
                <Kidsdropdown />
                <a href="#" class="flex justify-between items-center text-md font-bold nunito border-b px-6 py-3 hover:text-pink-500">
                    Trending
                </a>
                <a href="#" class="flex justify-between items-center text-md font-bold nunito border-b px-6 py-3 hover:text-pink-500">
                    Best Sellers
                </a>
                <a href="#" class="flex justify-between items-center text-md font-bold nunito border-b px-6 py-3 hover:text-pink-500">
                    Top Rated
                </a>
                <a href="#" class="flex justify-between items-center text-md font-bold nunito border-b px-6 py-3 hover:text-pink-500">
                    Jeans Collection
                </a>
                <a href="#" class="flex justify-between items-center text-md font-bold nunito border-b px-6 py-3 hover:text-pink-500">
                    Pant Items
                </a>
                <a href="#" class="flex justify-between items-center text-md font-bold nunito border-b px-6 py-3 hover:text-pink-500">
                    Shirt Items
                </a>
                <a href="#" class="flex justify-between items-center text-md font-bold nunito px-6 py-3 hover:text-pink-500">
                    Bag Collection
                </a>
            </ul>
        </div>

    );
};

export default Sidebar;
