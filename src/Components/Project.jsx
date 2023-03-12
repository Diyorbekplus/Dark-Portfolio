import React from 'react'
const Project = ({img, active,title,link}) => {
  return (
    <div className={`carousel-item bg-dark ${active}`}>
      <img src={img} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>{title}</h5>
        <p><a href={link} target="_blank" className="btn btn-outline-dark" rel="noreferrer">Live Preview</a></p>
      </div>
    </div>
  )
}

export default Project