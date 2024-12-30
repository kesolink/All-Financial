import React, { useRef, useState } from 'react';
import './EmailBox.scss';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { ThreeDots } from 'react-loader-spinner';

function EmailBox() {
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error('Please fill out all fields before submitting.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    setDisable(true);

    emailjs
      .sendForm('service_3wzkvqd', 'template_llgglzb', form.current, {
        publicKey: '_CreogsEFXcSrXAvp',
      })
      .then(
        () => {
          // Show success toast
          toast.success('Email sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
          });
          form.current.reset();
          setFormData({ from_name: '', from_email: '', message: '' });
          setDisable(false);
        },
        (error) => {
          // Show error toast
          toast.error(`Failed to send email: ${error.text}`, {
            position: 'top-center',
            autoClose: 3000,
          });
          setDisable(false);
        }
      );
  };

  return (
    <div className="emailbox-container">
      <ToastContainer /> {/* Toast container to display notifications */}
      <div className="left">
        <header>Send Us a Message</header>
      </div>
      <form className="right" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Message"
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" value="Send" disabled={disable}>
          {disable ? (
            <ThreeDots
              visible={true}
              height="40"
              width="40"
              color="#ffffff"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
}

export default EmailBox;
