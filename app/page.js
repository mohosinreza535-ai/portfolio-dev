import React from 'react'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Services from './components/home/Services'
import ServiceMarquee from './components/home/ServiceMarquee'
import TestimonialMarquee from './components/home/TestimonialMarquee'
import ProjectsSlider from './components/home/ProjectsSlider'

const page = () => {
  return (
    <div>
      <Hero />
      <ServiceMarquee />
      <About />
      <Services />
      <ProjectsSlider />
      <TestimonialMarquee />


    </div>
  )
}

export default page