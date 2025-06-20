import React, { useState } from 'react'
import "./TicketForm.scss"
import axios from 'axios'
import { toast } from 'sonner'
import { FaRegCopy, FaTimes } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Spiral } from "ldrs/react";
import "ldrs/react/Spiral.css";




function TicketForm() {
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [ticketId, setTicketId] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [files, setFiles] = useState([])
  const [previews, setPreviews] = useState([])
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFiles((prev) => [...prev, ...selectedFiles])

    const newPreviews = selectedFiles
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name
      }))
    setPreviews((prev) => [...prev, ...newPreviews])
  }

  const removeFile = (name) => {
    setFiles((prev) => prev.filter((file) => file.name !== name))
    setPreviews((prev) => prev.filter((file) => file.name !== name))
  }

  const handleSubmit = async () => {
    if (!title || !email || !description) {
      return toast.error("All fields are required")
    }

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("email", email)
    files.forEach((file) => {
      formData.append("files", file)
    })

    setLoading(true)

    try {
      const res = await axios.post(`https://netfusionideal.com/api/tickets/`, formData, {
        // const res = await axios.post(`http://localhost:5001/api/tickets/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success(res.data.message)
      setTicketId(res.data.ticketId)
      setShowModal(true)
      setEmail("")
      setDescription("")
      setTitle("")
      setFiles([])
      setPreviews([])
    //   setLoading(false)
    } catch (err) {
      console.log(err.message)
      toast.error(err.message)
    }finally{
        setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ticketId)
    toast.success("Ticket ID copied!")
  }

  const closeModal = () => setShowModal(false)

  return (
    <div className='ticket-form-container'>
      <div className="ticket-header">
        <h2>Need Help? Submit a Ticket</h2>
      </div>

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
        <div className="group-input">
          <label>Attach Files</label>
          <input type="file" multiple accept="image/*,application/pdf" onChange={handleFileChange} />
        </div>

        {previews.length > 0 && (
          <div className="multiple-preview">
            {previews.map((file, index) => (
              <div key={index} className="preview-item">
                <img src={file.url} alt={`preview-${index}`} />
                <button type="button" onClick={() => removeFile(file.name)} className="remove-preview-btn">
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        )}

              <button onClick={handleSubmit} disabled={loading}>{loading ? <Spiral size="25"speed="0.9" color="white" ></Spiral> : (
                      <span>Submit Complaint</span>
              )}</button>
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
