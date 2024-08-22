import React from 'react'
import { Link } from 'react-router-dom'

const PagesDropdown = ({ pageData }) => {
  return (
    <ul className="absolute hidden left-0 top-14 group-hover:block bg-white w-44 shadow-lg py-2 mt-1 border-t-[3px] border-pink-500 animate-drop-down">
      {pageData.map((data, index) => (
        <li key={index}>
          <Link
            to={data.link}
            className="block px-4 py-2 hover:text-pink-500 text-black hover:decoration-pink-500"
          >
            {data.name}<i class="fa-solid fa-plus text-xs ml-2"></i>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PagesDropdown
