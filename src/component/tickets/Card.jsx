import React from 'react'
import "./Card.scss"
import { CiMail } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
function Card({data}) {

    const navigate= useNavigate()

    const goToDetail = () => {
        navigate(`/ticket/${data._id}`, { state: data }); // Pass the whole data object
    };

   
  return (
    <div className='card-wrap' >
        <div className="top-wrap">
            <span className='ticket-title'>{data.title}</span>
            <span className={`status ${data.status.toLowerCase()}`}>{data.status}</span>
        </div>
        <span>ID: {data.ticketId}</span>
        <div className="wrap">
            <CiMail />
            <span>{data.email}</span>
        </div>
        <div className="wrap">
            <LuClock4 />
            <span>{new Date(data.createdAt).toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}</span>
        </div>

        <span className='ticket-title'>{data.title}</span>

        <div className="wrap-btn-detail" onClick={goToDetail}>
            <CgFileDocument />
            <span>View details</span>
        </div>


    </div>
  )
}

export default Card