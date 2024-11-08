import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID    
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Subject</label>
        <input type="text" name="subject" required />
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Type your message here" required />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;
