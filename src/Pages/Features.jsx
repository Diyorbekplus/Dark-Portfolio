import React from 'react'
import { services } from '../Components/data'
import Feature from '../Components/Feature'
import "../Style/css/Features.min.css"
const Features = () => {
  return (
    <section className="features bg-dark" id='features'>
        <div className="features_header">
          <p className='section_title'>Features</p>
          <h1>What I Do</h1>
        </div>
        <div className="features_body">
          {
            services.map((item) => {
            return  <Feature key={item.id} {...item}/>
            })
          }
        </div>
        <hr className="line"/>
    </section>
  )
}

export default Features