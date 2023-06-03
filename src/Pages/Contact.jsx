import React from 'react'
import Form from '../Components/Form'
import shakeHands from "../Images/shakeHands.png"
import "../Style/css/Contact.min.css"
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
            I am available for freelance work. Connect with me via:
            </p>
            <address>
              <p>Phone : <span>+998 97 374 11 77</span></p>
              <p>Email : <span>diyorbekplus@gmail.com</span></p>
            </address>
          </div>
        </div>
        <Form/>

      </div>
      <hr className="line" />
    </section>
  )
}

export default Contact