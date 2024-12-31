import React, { useEffect } from 'react'
import ContactHero from '../component/contact/ContactHero'
import EmailBox from '../component/contact/EmailBox'
import Reach from '../component/contact/Reach'
import Footer from '../component/Footer'
import { useLocation } from 'react-router-dom'

function ContactPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <>
    <ContactHero />
    <EmailBox />
    <Reach />
    <Footer />
    </>
  )
}

export default ContactPage