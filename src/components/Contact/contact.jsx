import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h1>Contact Me</h1>
      <p>Please Fill out the form below to contact me</p>
      <form className="contact-form">
        <h2>Send Your Message</h2>
        <label>Full Name</label>
        <input type="text" placeholder="Name" required />
        
        <label>Email Address</label>
        <input type="email" placeholder="Email Address" required />
        <p className="error-msg">This field is required</p>
        
        <label>Message</label>
        <textarea placeholder="Enter the message here" required></textarea>
        <p className="error-msg">This field is required</p>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
