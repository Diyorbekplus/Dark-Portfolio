import React from 'react'
import Form from '../Components/Form'
import shakeHands from "../Images/shakeHands.png"
import "../Style/css/Contact.css"

import { BsGlobe2 } from "react-icons/bs";
const Contact = () => {

  return (
    <section className="contact bg-dark" id="contact">
      <div className="contact_header">
        <p className='section_title'>Contact</p>
        <h1>Contact With Me</h1>
      </div>
      <div className="contact_body bg-dark">
      <div className="card bg-dark">
          <img src="" className='card-img-top' alt="" />
          <div className="card-body">
            <div className="img_box">
              <img src={shakeHands} alt="" />
            </div>
            <h6>Yuldashov Diyorbek</h6>
            <p className="text">
            I am available for freelance work. Connect with me via and call in to my account.
            </p>
            <address>
              <p>Phone : <span>+998 97 374 11 77</span></p>
              <p>Email : <span>diyorbekplus@gmail.com</span></p>
              <p><BsGlobe2/> : <a target="_blank" rel="noreferrer"  href="https://linktr.ee/diyorbekplus">Social Media</a></p>
            </address>
          </div>
        </div>
        {/* Form */}
        <Form/>

      </div>
      <hr className="line" />
    </section>
  )
}

export default Contact