'use client';
import Benefits1 from 'src/components/sections/Benefits1';
import Benefits2 from 'src/components/sections/Benefits2';
import Features from 'src/components/sections/Features';
import Footer from 'src/components/sections/Footer';
import Header from 'src/components/sections/Header';
import Hero from 'src/components/sections/Hero';
import HowItWorks from 'src/components/sections/HowItWorks';
import Pricing from 'src/components/sections/Pricing';

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Benefits1 />
      <Benefits2 />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  )
}
