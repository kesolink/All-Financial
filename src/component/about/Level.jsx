import React from 'react'
import "./Level.scss"
import { Link } from 'react-router-dom'
function Level() {
  return (
    <div className='next-container'>
        <div className="next-wrap">
        <p>Ready to Take Your Banking to the Next Level? </p>
        <div className="btn-wrap">
        <Link to='/contact#emailbox'><button>Contact Us Today</button></Link>
        <Link to='/service'><button>Learn More About Our Service</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Level