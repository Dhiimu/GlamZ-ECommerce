import React from 'react';
import Dropdown from './Dropdown';

const kidsData = {
  name: "Kid’s Fashion",
  link: "#",
  dropDown: [
    {
      heading: "Tops",
      link: "#",
      options: [
        { name: "T-Shirts", link: "#" },
        { name: "Shirts", link: "#" },
        { name: "Sweatshirts", link: "#" },
        { name: "Hoodies", link: "#" },
      ],
    },
    {
      heading: "Bottoms",
      link: "#",
      options: [
        { name: "Jeans", link: "#" },
        { name: "Shorts", link: "#" },
        { name: "Skirts", link: "#" },
        { name: "Leggings", link: "#" },
      ],
    },
    {
      heading: "Bottoms",
      link: "#",
      options: [
        { name: "Jeans", link: "#" },
        { name: "Shorts", link: "#" },
        { name: "Skirts", link: "#" },
        { name: "Leggings", link: "#" },
      ],
    },
    {
      heading: "Bottoms",
      link: "#",
      options: [
        { name: "Jeans", link: "#" },
        { name: "Shorts", link: "#" },
        { name: "Skirts", link: "#" },
        { name: "Leggings", link: "#" },
      ],
    }
    // Additional categories...
  ],
  image: "/images/heroside1.jpg", // Add the image path here
};

const Kidsdropdown = () => {
  return <Dropdown data={kidsData} />;
};

export default Kidsdropdown;
