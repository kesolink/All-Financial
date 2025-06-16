import React, { useState } from 'react'
import "./TicketForm.scss"
import axios from 'axios'
import { toast } from 'sonner'
import { FaRegCopy } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

function TicketForm() {
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [ticketId, setTicketId] = useState("")
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = async () => {
        if(!title || !email || !description){
            return toast.error("all field is require")
        }
        const data = { title, description, email }
        try {
            const res = await axios.post(`http://localhost:5001/api/tickets/`, data)
            toast.success(res.data.message)
            setTicketId(res.data.ticketId)
            setShowModal(true)
            setEmail("")
            setDescription("")
            setTitle("")
        } catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(ticketId)
        toast.success("Ticket ID copied!")
    }

    const closeModal = () => setShowModal(false)

    return (
        <div className='ticket-form-container'>
            <div className="ticket-box">
                <h1>Submit a Complaint</h1>
                <div className="group-input">
                    <label>Email Address *</label>
                    <input type="email" placeholder='your@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="group-input">
                    <label>Title *</label>
                    <input type="text" placeholder='Brief description of the issue' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="group-input">
                    <label>Description *</label>
                    <textarea placeholder='Please provide detailed information about your complaint...' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button onClick={handleSubmit}>Submit Complaint</button>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <AiOutlineCheckCircle className="success-icon" />
                        <h2>Ticket Created Successfully!</h2>
                        <p className="ticket-message">
                            Please save this ticket ID for future reference. You can use it to track your complaint status.
                        </p>
                        <p>Your Ticket ID:</p>
                        <div className="ticket-id-box">
                            <span>{ticketId}</span>
                            <FaRegCopy onClick={copyToClipboard} className="copy-icon" title="Copy Ticket ID" />
                        </div>
                        <button className="close-btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default TicketForm
