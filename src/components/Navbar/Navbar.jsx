import React, { useState } from 'react'
import Logo from '../util/Logo'
import Navutil from './Navutil'
import Navmenu from './Navmenu'

// Edit links here!
const navLinks = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'Shop',
    link: '#',
    dropDown: [
      {
        name: 'Option 1',
        link: '#',
      },
      {
        name: 'Option 2',
        link: '#',
      },
      {
        name: 'Option 3',
        link: '#',
      },
      {
        name: 'Option 4',
        link: '#',
      },
    ],
  },
  {
    name: 'Categories',
    link: '#',
    dropDown: [
      {
        name: 'Option 1',
        link: '#',
      },
      {
        name: 'Option 2',
        link: '#',
      },
      {
        name: 'Option 3',
        link: '#',
      },
      {
        name: 'Option 4',
        link: '#',
      },
      {
        name: 'Option 1',
        link: '#',
      },
      {
        name: 'Option 2',
        link: '#',
      },
      {
        name: 'Option 3',
        link: '#',
      },
      {
        name: 'Option 4',
        link: '#',
      },
      {
        name: 'Option 1',
        link: '#',
      },
      {
        name: 'Option 2',
        link: '#',
      },
      {
        name: 'Option 3',
        link: '#',
      },
      {
        name: 'Option 4',
        link: '#',
      },
    ],
  },
  {
    name: 'Products',
    link: '#',
    dropDown: [
      {
        heading: 'Heading 1',
        link: '#',
        options: [
          {
            name: 'Option 1',
            link: '#'
          },
          {
            name: 'Option 2',
            link: '#'
          },
          {
            name: 'Option 3',
            link: '#'
          },
          {
            name: 'Option 4',
            link: '#'
          },
        ]
      },
      {
        heading: 'Heading 2',
        link: '#',
        options: [
          {
            name: 'Option 1',
            link: '#'
          },
          {
            name: 'Option 2',
            link: '#'
          },
          {
            name: 'Option 3',
            link: '#'
          },
          {
            name: 'Option 4',
            link: '#'
          },
        ]
      },
      {
        heading: 'Heading 3',
        link: '#',
        options: [
          {
            name: 'Option 1',
            link: '#'
          },
          {
            name: 'Option 2',
            link: '#'
          },
          {
            name: 'Option 3',
            link: '#'
          },
          {
            name: 'Option 4',
            link: '#'
          },
        ]
      },
      {
        heading: 'Heading 4',
        link: '#',
        options: [
          {
            name: 'Option 1',
            link: '#'
          },
          {
            name: 'Option 2',
            link: '#'
          },
          {
            name: 'Option 3',
            link: '#'
          },
          {
            name: 'Option 4',
            link: '#'
          },
        ]
      },
    ],
  },
  {
    name: 'Blog Classic',
    link: '#',
    dropDown: [
      {
        name: 'Option 1',
        link: '#',
      },
      {
        name: 'Option 2',
        link: '#',
      },
      {
        name: 'Option 3',
        link: '#',
      },
      {
        name: 'Option 4',
        link: '#',
      },
    ],
  },
  {
    name: 'Pages',
    link: '#',
    dropDown: [
      {
        name: 'Option 1',
        link: '#',
      },
      {
        name: 'Option 2',
        link: '#',
      },
      {
        name: 'Option 3',
        link: '#',
      },
      {
        name: 'Option 4',
        link: '#',
      },
    ],
  },
  {
    name: 'Others',
    link: '#',
    dropDown: [
      {
        name: 'Option 1',
        link: '#',
      },
      {
        name: 'Option 2',
        link: '#',
      },
      {
        name: 'Option 3',
        link: '#',
      },
      {
        name: 'Option 4',
        link: '#',
      },
    ],
  },
]

const Navbar = () => {
  const [isHover, setisHover] = useState(0)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <Navmenu navLinks={navLinks} />

        {/* Right Side */}
        <Navutil />
      </div>
    </nav>
  )
}

export default Navbar
