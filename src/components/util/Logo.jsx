import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <div className="flex items-center space-x-3">
        <img src="/images/logo.png" alt="Logo" className=" h-16" />
      </div>
    </Link>
  )
}

export default Logo
