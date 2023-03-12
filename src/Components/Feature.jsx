import React, { useState } from 'react'
const Feature = ({id,icon, title, text}) => {
    const [readMore, setReadMore] = useState(false)
  return (
    <article className=''>
        <div className="icon">
        {icon}
        </div>
        <h2>{title}</h2>
        <p>{readMore ? text : `${text.substring(0, 170)}...`}</p>
        <button className='readmore_btn' onClick={() => setReadMore(!readMore)}>Read More</button>
    </article>
  )
}

export default Feature