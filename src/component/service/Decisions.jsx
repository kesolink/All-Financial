import React from 'react'
import "./Decisions.scss"
import { IoMdCheckmarkCircle } from 'react-icons/io'
import img from "../../assets/decision.png"
function Decisions() {
  return (
    <div className='decision-container'>
        <div className="left">
            <span>Advanced Reporting and Integration</span>
            <header>Data-Driven Decisions and Seamless Integration</header>
            <div className="wrap-list">
                <IoMdCheckmarkCircle size={20}/>
                <p><strong>Reports:</strong> Generate detailed financial reports for better decision-making.</p>
            </div>
            <div className="wrap-list">
            <IoMdCheckmarkCircle size={20}/>
                <p><strong>Middleware Integration Layer:</strong> Connect legacy systems, APIs, and payment gateways effortlessly.</p>
            </div>
            <div className="wrap-list">
                <IoMdCheckmarkCircle size={20} />
                <p><strong>Core Banking Switches:</strong> Ensure smooth, secure transactions across platforms.</p>
            </div>
            <div className="wrap-list">
                <IoMdCheckmarkCircle size={20} />
                <p><strong>Management Portal:</strong> Centralized control for efficient operations.</p>
            </div>
        </div>
        <div className="right"><img src={img} alt="" /></div>
    </div>
  )
}

export default Decisions