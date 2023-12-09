import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Offers from '../../components/Offers'
import Testimonial from '../../components/Testimonial'
import Cta from '../../components/Cta'
import Footer from '../../components/Footer'
import HowItWorks from '../../components/HowItWorks'
import About from '../../components/About'
import Accordion from '../../components/Accordion'


const Home = () => {
  return (
      <div>
        <Header />
        <Hero />

        <Testimonial />
        <Cta />
        <About />
        <Offers />
        {/* <Accordion /> */}
        {/* <HowItWorks /> */}
        {/* <Footer /> */}
      </div>
  )
}

export default Home