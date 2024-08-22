import React, { useState } from 'react';

const Dropdown = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li 
            className="relative border-b px-6 py-3 hover:bg-gray-100 group"
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
        >
            <a
                href={data.link}
                className="flex justify-between items-center text-md font-bold nunito hover:text-pink-500 transition-colors duration-300 w-full"
                onClick={toggleDropdown}
            >
                {data.name}
                <i className="fa-solid fa-plus"></i>
            </a>
            {(isOpen || data.forceOpen) && (
                <div className="absolute left-full top-0 w-[1000px] bg-white shadow-lg border-t-[3px] border-pink-500 grid grid-cols-5 gap-6 py-4 px-4 mt-1 nunito animate-drop-down ">
                    {data.dropDown.map((section, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="font-bold py-2 px-4 text-pink-500">{section.heading}</h3>
                            <ul className="flex flex-col gap-2">
                                {section.options.map((option, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={option.link}
                                            className="py-2 px-4 block hover:text-pink-500 text-black hover:decoration-pink-500"
                                        >
                                            {option.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {data.image && (
                        <div className="col-span-1">
                            <a href={data.link}>
                                <img src={data.image} className="w-fit object-cover" alt={`${data.name} image`} />
                            </a>
                        </div>
                    )}
                </div>
            )}
        </li>
    );
};

export default Dropdown;
