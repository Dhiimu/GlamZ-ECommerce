import React from 'react'

const Navutil = () => {
  return (
    <div className="flex items-center space-x-6">
      <button className="text-black hover:text-pink-700 text-xl">
        <i className="fa fa-search"></i>
      </button>
      <button className="text-black hover:text-pink-700 relative text-xl">
        <i className="fa fa-shopping-bag"></i>
        <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
          5
        </span>
      </button>
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-5 rounded-md">
        Try Free Now
      </button>
    </div>
  )
}

export default Navutil
