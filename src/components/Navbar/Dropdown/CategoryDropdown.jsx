import React from 'react'
import { Link } from 'react-router-dom'

const CategoryDropdown = ({ categoryData }) => {
  return (
    <ul className="absolute hidden -left-20 top-14 group-hover:block bg-white min-w-96 max-w-[1000px] columns-3 shadow-lg py-2 mt-1 border-t-[3px] border-pink-500 animate-drop-down">
      {categoryData.map((data, index) => (
        <li key={index}>
          <Link
            tp={data.link}
            className="block px-4 py-2 hover:text-pink-500 text-black hover:decoration-dotted hover:decoration-pink-500"
          >
            {data.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryDropdown
