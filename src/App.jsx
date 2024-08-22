import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Featuredproducts from './components/Products/Featuredproducts'
import Footer from './components/Footer/Footer'

import CarouselSections from './components/Products/CarouselSections'
// import First from './components/TEMP/1'
// import Second from './components/TEMP/2'
// import Third from './components/TEMP/3'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Featuredproducts />
        <CarouselSections />
        <Footer/>
      </BrowserRouter>
    



    </>
  )
}

export default App