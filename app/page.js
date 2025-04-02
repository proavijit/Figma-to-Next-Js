import About from '@/components/About'
import Dummy from '@/components/Dummy'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SectionTitle from '@/components/SectionTitle'
import ServiceCardCarousel from '@/components/ServiceCardCarousel'
import ThemeParkOffers from '@/components/ThemeParkOffers '


import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SectionTitle title='About us' desc='Our services will enrich your lifestyle' />
      <ServiceCardCarousel />
      <SectionTitle title='Extraordinary Offers' desc='offers that you can’t ignore' />
      <ThemeParkOffers />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
    </>
  )
}

export default page