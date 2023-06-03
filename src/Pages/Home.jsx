import React from 'react'
import "../Style/css/Home.min.css"
import me from "../Images/me.jpg"
import resume from "../Resume.pdf";
import { FaDownload } from "react-icons/fa";
const Home = () => {
  return (
    <section className='home bg-dark' id='home'>
      <div className="home_body">
        <aside className="details">
            <h6>Welcome to my world</h6>
            <h1>Hi, I'm Diyorbek</h1>
            <p className='col-lg-10'>A React developer with a keen eye for detail and a deep love for crafting pixel-perfect user interfaces. With hands-on experience in modern front-end technologies, I strive to create visually appealing, highly performant, and user-centric web applications that leave a lasting impression.</p>
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