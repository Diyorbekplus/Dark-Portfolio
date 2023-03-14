import React from 'react'
import "../Style/css/Portfolio.css"
import { projects } from '../Components/data'
import Project from '../Components/Project'
const Portfolio = () => {
  return (
    <section className="portfolio bg-dark" id="portfolio">
      <div className="portolio_header">
        <p className="section_title">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        <h1>My Portfolio</h1>
      </div>
      <div className="portfolio_body">
      <div id="carouselExampleCaptions" className="carousel slide container bg-dark" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner">
        { 
          projects.map((project) => {
            return <Project key={project.id} {...project}/>
          })
        }
  </div>
</div>
      </div>
      <hr className="line" />
    </section>
  )
}

export default Portfolio