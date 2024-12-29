import React, { useRef } from 'react';
import './EmailBox.scss';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function EmailBox() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3wzkvqd', 'template_llgglzb', form.current, {
        publicKey: '_CreogsEFXcSrXAvp',
      })
      .then(
        () => {
          // Show success toast
          toast.success('Email sent successfully!', {
            position: 'top-center',
            autoClose: 3000, // Close after 3 seconds
          });
          form.current.reset();
        },
        (error) => {
          // Show error toast
          toast.error(`Failed to send email: ${error.text}`, {
            position: 'top-center',
            autoClose: 3000, // Close after 3 seconds
          });
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
        <input type="text" placeholder="Name" name="from_name" />
        <input type="text" placeholder="Email" name="from_email" />
        <textarea placeholder="Message" rows="5" name="message" />
        <button type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmailBox;
