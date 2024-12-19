import React from 'react'
import "./Savings.scss"
import pig from "../../assets/pig.png"
function Savings() {
  return (
    <div className='savings-container'>
        <div className="savings-main">
        <div className="left">
            <img src={pig} alt="" />
        </div>
        <div className="right">
            <button>Thrift and Savings Management</button>
            <header>Revolutionize Savings with Our Esusu/Thrift Features</header>
            <p>Enable financial institutions to manage group savings and thrift collections effectively</p>
        </div>
        </div>
    </div>
  )
}

export default Savings