import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import "./TicketFilter.scss"
function TicketFilter({onFilterChange, activeFilter, searchTerm, onSearchChange}) {

    const filters = [
    { value: 'new', label: 'New' },
    { value: 'processing', label: 'In Progress' },
    { value: 'closed', label: 'closed' },
    { value: 'all', label: 'All' }
  ];
  return (
    <div className='ticketfilter-wrap'>
        <div className="input-wrap">
            <label >Search by Ticket ID or Email</label>
            <div className="wrap">
                <IoSearchOutline />
                <input type="text" placeholder='Enter ticket iID or email....' value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
            </div>
        </div>

        <div className="toggle-wrap">
            <label >Filter by Status</label>
            <div className="wrap-btn">
            {filters.map((data, index)=>(
                <button key={data.value} onClick={()=> onFilterChange(data.value)} className={activeFilter === data.value ? "active" : ""}>{data.label}</button> 
            ))}</div>
        </div>
    </div>
  )
}

export default TicketFilter