import React from 'react';
import Dropdown from './Dropdown';

const menData = {
  name: "Men’s Fashion",
  link: "#",
  dropDown: [
    {
      heading: "Shirts",
      link: "#",
      options: [
        { name: "Formal Shirts", link: "#" },
        { name: "Casual Shirts", link: "#" },
        { name: "T-Shirts", link: "#" },
        { name: "Polos", link: "#" },
      ],
    },
    {
      heading: "Pants",
      link: "#",
      options: [
        { name: "Jeans", link: "#" },
        { name: "Chinos", link: "#" },
        { name: "Shorts", link: "#" },
        { name: "Joggers", link: "#" },
      ],
    },
    {
        heading: "Pants",
        link: "#",
        options: [
          { name: "Jeans", link: "#" },
          { name: "Chinos", link: "#" },
          { name: "Shorts", link: "#" },
          { name: "Joggers", link: "#" },
        ],
      },
      {
        heading: "Pants",
        link: "#",
        options: [
          { name: "Jeans", link: "#" },
          { name: "Chinos", link: "#" },
          { name: "Shorts", link: "#" },
          { name: "Joggers", link: "#" },
        ],
      }
    // Additional categories...
  ],
  image: "/images/heroside1.jpg", // Add the image path here
};

const Mensdropdown = () => {
  return <Dropdown data={menData} />;
};

export default Mensdropdown;
