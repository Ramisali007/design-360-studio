import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    // Replace these with your actual EmailJS credentials
    // You can get these by signing up for free at https://www.emailjs.com/
    const SERVICE_ID = "service_id"; 
    const TEMPLATE_ID = "template_id";
    const PUBLIC_KEY = "public_key";

    if (SERVICE_ID === "service_id") {
      // Fallback for demonstration if credentials aren't set
      setTimeout(() => {
        setIsSending(false);
        setIsSuccess(true);
        console.log("Form data collected (Placeholder):", new FormData(form.current));
        alert("To make this form fully functional, please add your EmailJS credentials in src/pages/Contact.jsx. For now, it's working in simulation mode!");
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setIsSending(false);
          setIsSuccess(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setIsSending(false);
          setError("Failed to send message. Please try again or contact us directly via email.");
      });
  };

  return (
    <div className="page-container contact-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>Ready to discuss your next project?</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="contact-block">
              <h3>General questions</h3>
              <p>If you have a question or comment, please reach out:</p>
              <a href="mailto:hello@design360.global" className="contact-link">hello@design360.global</a>
            </div>

            <div className="contact-block">
              <h3>Press inquiries</h3>
              <p>For media inquiries and interview requests, please contact:</p>
              <a href="mailto:hello@design360.global" className="contact-link">hello@design360.global</a>
            </div>

            <div className="contact-block">
              <h3>Join the team</h3>
              <p>We welcome talents from all around the world.</p>
              <a href="mailto:hello@design360.global" className="contact-link">hello@design360.global</a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2>Request a Proposal</h2>
            <p className="form-intro">Preparing the groundwork for a rewarding business relationship and a successful project begins here.</p>
            
            {isSuccess ? (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3>Thank you!</h3>
                <p>Your request has been sent successfully. We'll get back to you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="btn btn-primary">Send another request</button>
              </motion.div>
            ) : (
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="user_name" placeholder="Your name" required />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="user_email" placeholder="Your email address" required />
                </div>
                
                <div className="form-group">
                  <label>Project Details</label>
                  <textarea name="message" placeholder="Tell us about your project..." rows="5" required></textarea>
                </div>
                
                {error && <p className="error-message">{error}</p>}
                
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{width: '100%'}}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Request"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
