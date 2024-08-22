import React from 'react'
import { Link } from 'react-router-dom'
const ProductDropdown = ({ productData }) => {
  return (
    <ul className="absolute hidden mx-auto w-[1200px] left-20 top-14 -translate-x-1/2 group-hover:grid grid-cols-5 gap-10 bg-white shadow-lg py-4 px-4 mt-1 border-t-[3px] border-pink-500 animate-drop-down-product">
      {productData.map((data, index) => (
        <li key={index} className="flex flex-col">
          <Link
            to={data.link}
            className="font-bold mb-2  decoration-pink-500"
          >
            {data.heading}
           
          </Link>

          {data.options.map((option, idx) => (
            <Link
              key={idx}
              to={option.link}
              className="block py-2 hover:text-pink-500 text-black  hover:decoration-pink-500"
            >
              {option.name}
            </Link>
          ))}
        </li>
      ))}

      <li>
        <a>
          <img src="/images/navbar.jpg" className="w-fit object-cover" />
        </a>
      </li>
    </ul>
  )
}

export default ProductDropdown
