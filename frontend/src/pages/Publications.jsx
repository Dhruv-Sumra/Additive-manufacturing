import React from 'react'
import Hero from '../components/publications/Hero'
import Publlications from '../components/publications/Publlications'
import Generals from '../components/publications/Generals'
import Footer from '../components/home/Footer'
import Accordion from '../components/publications/Accordion'
import CTA from '../components/publications/CTA'

const Publications = () => {
  return (
    <div>
      <Hero/>
      <Publlications/>
      <Generals/>
      <Accordion/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Publications