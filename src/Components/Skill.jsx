import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
const Skill = ({id, img, title, text,modalTitle, features}) => {
    const [showSkillsModal, setShowSkillsModal] = useState(false);
  return (
    <article className='skill' key={id}>
    <div className='skill-logo'>
      <img src={img} alt={title}/>
    </div>
    <div className='skill-details'>
      <h2 className='skill-title'>{title}</h2>
      <p className='skill-text'>{text}</p>
    </div>
    <button className=' show-modal' onClick={() => setShowSkillsModal(true)}><span>{ <FaArrowRight/>}</span></button>
    {
      showSkillsModal ? (
        <div className='skills-modal bg-dark'>
        <div className='skills-modal-content card bg-dark'>
          <div className='skills-modal-header card-header'>
            <h2 className='text-center'>
              {modalTitle}
            </h2>
            <p><button className='btn' onClick={() => setShowSkillsModal(false)}><span>{<HiXMark className='icon'/>}</span> </button></p>
            
          </div>
          <div className='skills-modal-body  card-body'>
           <ul className='data-list'>
            {
              features.map((feature, index) => {
                return (
                  <li className='data-list-item' key={index}>{feature}</li>
                )
              }) 
            }
           </ul>
          </div>
        </div>
      </div>
      )
      : 
      ""
    }
  </article>
  )
}

export default Skill