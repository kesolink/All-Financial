import React, { useEffect } from 'react'
import ContactHero from '../component/contact/ContactHero'
import EmailBox from '../component/contact/EmailBox'
import Reach from '../component/contact/Reach'
import Footer from '../component/Footer'
import { useLocation } from 'react-router-dom'
import TicketForm from '../component/contact/TicketForm'

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
    <TicketForm />
    <Footer />
    </>
  )
}

export default ContactPage