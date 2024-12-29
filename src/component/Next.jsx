import React from 'react'
import "./Next.scss"
import { Link } from 'react-router-dom'
function Next() {
  return (
    <div className='next-container'>
        <div className="next-wrap">
        <p>Ready to Take Your Banking to the Next Level? </p>
        <div className="btn-wrap">
           <Link to="/contact"> <button>Contact Us</button></Link>
           <Link to="/about"><button>Learn More About Us</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Next