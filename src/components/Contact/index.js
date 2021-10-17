import React, { useEffect } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { ContactContainer, ContactH, ContactImg, ContactMail, ContactName, ContactP, ContactWrapper } from './ContactElements'
import me from '../../images/me.png'
import Aos from 'aos'
import "aos/dist/aos.css"


const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <ContactContainer id="contact">
      <ContactH>Contact Me</ContactH>
      <ContactWrapper data-aos="fade-up">
        <ContactImg src={me} alt="me"/>
        <ContactName>MangoChu</ContactName>
        <ContactMail>
        <FaEnvelope /><ContactP>mangochu81806@gmail.com</ContactP>
        </ContactMail>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
