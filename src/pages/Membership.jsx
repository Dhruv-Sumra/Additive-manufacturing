import React from 'react'
import Hero from '../components/Membership/Hero'
import Info from '../components/Membership/Info'
import Tier from '../components/Membership/Tier'
import Testimonials from '../components/Membership/Testimonials'
import Payment from '../components/Membership/Payment'
import Footer from '../components/home/Footer'
import CTA from '../components/Membership/CTA'

const Membership = () => {
  return (
    <div>
      <Hero/>
      <Info/>
      <Tier/>
      <Testimonials/> 
      <Payment/>
      <CTA/>
      <Footer/>
    
    </div>
  )
}

export default Membership