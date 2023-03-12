import React from 'react'
import "../Style/css/Home.css"
import me from "../Images/me.png"
import resume from "../resume.pdf";
import { FaDownload } from "react-icons/fa";
const Home = () => {
  return (
    <section className='home bg-dark' id='home'>
      <div className="home_body">
        <aside className="details">
            <h6>Welcome to my world</h6>
            <h1>Hi, I'm Diyorbek</h1>
            <h1>Front-End Developer</h1>
            <p className=' col-lg-10'>I am an junior front-end-developer who designs and implements user interface components for JavaScript-based web applications using the ReactJS open-source library.</p>
            <div className="buttons">
              <a href="#contact" className=''>Hire Me</a>
              <a className='download-btn' href={resume} download ><span>{<FaDownload/>} </span>Resume</a>
            </div>
        </aside>
        <aside className='status_img'>
            <img src={me} alt="" />
        </aside>
      </div>

        <hr className='line'/>
    </section>
  )
}

export default Home