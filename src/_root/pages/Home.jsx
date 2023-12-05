import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Offers from '../../components/Offers'
import Testimonial from '../../components/Testimonial'
import Cta from '../../components/Cta'
import Footer from '../../components/Footer'


const Home = () => {
  return (
      <div>
        <Header />
        <Hero />

        <Offers />
        <Testimonial />
        <Cta />
        <Footer />
      </div>
  )
}

export default Home