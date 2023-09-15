import React, { useRef } from 'react'
import '../../css/contact.css'
import { useNavigate } from 'react-router-dom'
//import { Form, Row, Col, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

export default function ContactComponent() {
  const form = useRef();
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cg4envx",
        "template_c7cp0fa",
        form.current,
        "orAztNryCIeu_ksML"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      navigate(`/`)
  };

  return (
    <div className='contact'>
        <div className='StyledContactForm'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Enter your name' />
            <input type="email" name="user_email" placeholder='Enter your email' required/>
            <textarea name="message" placeholder='Enter your message' required/>
            <input type="submit" value="Send Message"   />
          </form>
        </div>
    </div>
  )
}

