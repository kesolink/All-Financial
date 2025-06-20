import React from "react";
import "./TicketDetail.scss";
import { GoArrowLeft } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { FiPlayCircle } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'sonner';
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Spiral } from "ldrs/react";
import "ldrs/react/Spiral.css";

function TicketDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [fullscreenImage, setFullscreenImage] = React.useState(null);

  const data = location.state;

  const navigateBack = () => {
    navigate("/ticket");
  };

  if (!data) return <div>Ticket data not found.</div>;

  const updatedStatus = async (id, status) => {
    setIsLoading(true);
    try {
      const res = await axios.put(`http://localhost:5001/api/tickets/${id}`, { status });
      toast.success(res.data.message);
      navigate("/ticket");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5001/api/tickets/${id}`);
      toast.success(res.data.message);
      navigate("/ticket");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="detail-container">
      <div className="top-header">
        <div className="wrap" onClick={navigateBack}>
          <GoArrowLeft />
          <span>Back to Dashboard</span>
        </div>
        <span>Ticket Details</span>
      </div>

      <div className="ticket-wrapper">
        <div className="top">
          <div className="top-wrap">
            <span className="ticket-title">Title: {data.title}</span>
            <span className={`status ${data.status.toLowerCase()}`}>{data.status}</span>
          </div>
          <span className="tic-id">TicketID: {data.ticketId}</span>
        </div>

        <div className="wrap-detail">
          <div className="wrap">
            <CiMail />
            <span className="main">Email:</span>
            <span>{data.email}</span>
          </div>

          <div className="wrap-in">
            <div className="wrap">
              <LuClock4 />
              <span className="main">Created:</span>
              <span>{new Date(data.createdAt).toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}</span>
            </div>
            {data.closeAt && (
              <div className="wrap">
                <LuClock4 />
                <span className="main">Closed:</span>
                <span>{new Date(data.closeAt).toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}</span>
              </div>
            )}
          </div>
        </div>

        <hr />

        <div className="description-wrap">
          <div className="des-wrap">
            <CgFileDocument />
            <span>View details</span>
          </div>
        </div>

        <div className="tic-content">{data.description}</div>

        <hr />

        {data.filePaths?.length > 0 && (
          <div className="ticket-images-grid">
            {data.filePaths.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`ticket-img-${index}`}
                onClick={() => setFullscreenImage(img)}
                className="ticket-thumbnail"
              />
            ))}
          </div>
        )}

        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
            <img src={fullscreenImage} alt="fullscreen-img" className="fullscreen-img" />
          </div>
        )}

        <hr />

        <div className="last-group">
          <span className="last-lable">Update Status</span>
          <div className="wrap">
            <div className="last-btn-wrap">
              {data.status === 'new' && (
                <button onClick={() => updatedStatus(data._id, "processing")} disabled={isLoading}>
                  {isLoading ? <Spiral size="25" speed="0.9" color="white" /> : (
                    <>
                      <FiPlayCircle />
                      <span>Set to Progress</span>
                    </>
                  )}
                </button>
              )}
              {data.status === 'processing' && (
                <button onClick={() => updatedStatus(data._id, "closed")} disabled={isLoading}>
                  {isLoading ? <Spiral size="25" speed="0.9" color="white" /> : (
                    <>
                      <FiPlayCircle />
                      <span>Close</span>
                    </>
                  )}
                </button>
              )}
            </div>
            <button onClick={() => handleDelete(data._id)}>
              <MdDeleteForever size={18} />
              <span>Delete Ticket</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;
