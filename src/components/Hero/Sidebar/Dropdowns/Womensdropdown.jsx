import React from 'react';
import Dropdown from './Dropdown';

const womenData = {
  name: "Women’s Fashion",
  link: "#",
  dropDown: [
    {
      heading: "Dresses",
      link: "#",
      options: [
        { name: "Evening Dresses", link: "#" },
        { name: "Casual Dresses", link: "#" },
        { name: "Maxi Dresses", link: "#" },
        { name: "Midi Dresses", link: "#" },
      ],
    },
    {
      heading: "Tops",
      link: "#",
      options: [
        { name: "Blouses", link: "#" },
        { name: "T-Shirts", link: "#" },
        { name: "Tank Tops", link: "#" },
        { name: "Crop Tops", link: "#" },
      ],
    },
    // Additional categories...
  ],
  image: "/images/heroside1.jpg", // Add the image path here
};

const Womensdropdown = () => {
  return <Dropdown data={womenData} />;
};

export default Womensdropdown;
