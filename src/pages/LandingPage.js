import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import SocialSection from '../components/SocialSection';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/work/WorkSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
