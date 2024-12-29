import React from 'react'
import './EmailBox.scss'

function EmailBox() {
  return (
    <div className='emailbox-container'>
        <div className="left">
            <header>Send Us a Message</header>
        </div>
        <div className="right">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <textarea placeholder="Message" rows="5" />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default EmailBox