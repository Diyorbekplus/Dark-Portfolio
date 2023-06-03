import React from 'react'
import "../Style/css/Skills.min.css"
import Skill from '../Components/Skill'
import { skills } from '../Components/data'
const Skills = () => {
  return (
    <section className="skills bg-dark" id="skills">
      <div className="skills_header">
        <p className='section_title'>Skills</p>
        <h1>What I Know</h1>
      </div>
      <div className="skills_body">
        {
          skills.map((skill) => {
            return <Skill key={skill.id} {...skill}/>
          })
        }
      </div>
      <hr className='line'/>
    </section>
  )
}

export default Skills