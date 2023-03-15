import React from 'react'

import Header from '../../components/header/Header'
import VerticalNavbar from '../../components/navbar/Vertical_Navbar'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Tools from '../../components/Tools/Tools'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import './Home.scss'


const Home = () => {
  return (
    <>
      <Header/>
      <VerticalNavbar />
      <Navbar />
      <Hero />
      <Tools />
      <Carousel />
      <Footer />
    </>
  )
}

export default Home