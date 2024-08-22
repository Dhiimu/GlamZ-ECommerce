import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ShopDropdown from './Dropdown/ShopDropdown'
import CategoryDropdown from './Dropdown/CategoryDropdown'
import ProductDropdown from './Dropdown/ProductDropdown'
import BlogClassicDropdown from './Dropdown/BlogClassicDropdown'
import PagesDropdown from './Dropdown/PagesDropdown'
import OthersDropdown from './Dropdown/OthersDropdown'


// This is the Navmenu

// Here we are sending the array that we made in Navbar.jsx
const Navmenu = ({ navLinks }) => {
  return (
    <ul className="flex items-center space-x-6 text-gray-700">
      {navLinks.map((data, index) => (
        <li key={index} className="relative group py-5 hover:text-pink-500 nunito">
          <Link to={data.link}>
            {data.name}
            {data.dropDown && (
              <FontAwesomeIcon className="ml-1 text-sm" icon={faChevronDown} />
            )}
          </Link>


          {/* This Logic here is seeing when a specific name will hover it'll render it's corresponding component dropdown */}

          {/* The 32 line checking to make sure the data dropdown is not empty, if it's empty then it will become false and it will not render the below code. That's why we are using AND operator. */}
          {data.dropDown && (
            <>
              {data.name === 'Shop' && <ShopDropdown shopData={data.dropDown} />}
              {data.name === 'Categories' && <CategoryDropdown categoryData={data.dropDown} />}
              {data.name === 'Products' && <ProductDropdown productData={data.dropDown} />}
              {data.name === 'Blog Classic' && <BlogClassicDropdown blogData={data.dropDown} />}
              {data.name === 'Pages' && <PagesDropdown pageData={data.dropDown} />}
              {data.name === 'Others' && <OthersDropdown otherData={data.dropDown} />}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navmenu
