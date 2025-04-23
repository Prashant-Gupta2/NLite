import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
      <div>
      <h2>NLITE</h2>
      </div>
      <div>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/courses">Courses</Link> 
        <Link to="/blogs">Blogs</Link> 
        <Link to="/contact">Contact US</Link>  
        <button>Enroll Now</button>
        <div>
          
        </div>
      </div>
      </nav>
    </div>
  )
}
