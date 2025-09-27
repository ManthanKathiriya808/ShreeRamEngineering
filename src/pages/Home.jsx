import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroSection from '../components/Homepage/HeroSection'
import Services from '../components/Homepage/Services'
import MoreInfo from '../components/Homepage/MoreInfo'
import IndustryWeServe from '../components/Homepage/Slider'
import StatsSection from '../components/Homepage/StatsSection'
import WhyChooseUs from '../components/Homepage/WhyChooseUs'
import Testimonials from '../components/Homepage/Testimonials'
import CTASection from '../components/Homepage/CTASection'

const Home = () => {
  return (
    <Layout>
      <HeroSection/>
      <Services />
      <StatsSection />
      <MoreInfo />
      <IndustryWeServe />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </Layout>
  )
}

export default Home