import React, { useState } from 'react'

const Form = () => {
    const [inputs, setInputs] = useState({});
    const  handleChange = (e) => {
      const {name, value} = e.target;
      setInputs(values => ({...values,
      [name] : value}))
    }
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      localStorage.setItem("Client", JSON.stringify(inputs))
    }
  return (
    <form className='form row g-5' onSubmit={handleSubmit}>
    <div className="">
    <label htmlFor="floatingInput">Name</label>
    <input value={inputs.name || ""} name="name" onChange={handleChange} type="text" className="form-control" id="floatingInput" placeholder="Name"/>
    </div>
    <div className="col-md-6">
    <label htmlFor="floatingInput">Phone Number</label>
    <input value={inputs.number || ""} name="number" onChange={handleChange} type="tel" className="form-control" id="floatingInput" placeholder="Phone Number"/>
    </div>
    <div className="col-md-6">
    <label htmlFor="floatingInput">Email</label>
    <input  value={inputs.email || ""} name="email" onChange={handleChange} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
    </div>
    <div className="">
    <label htmlFor="floatingTextarea">Message</label>
    <textarea value={inputs.textarea || ""} name="textarea" onChange={handleChange}  className="form-control" placeholder="Message" id="floatingTextarea"></textarea>
  </div>
  <div className='col-12'>
    <button className='submit_btn bg-dark' type='submit'>Send Message</button>
  </div>
  </form>
  )
}

export default Form