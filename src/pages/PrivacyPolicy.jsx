import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

// Import some assets to make the page look good
import policyImg from '../assets/landing-page/architecture-image.jpg';

const PrivacyPolicy = () => {
  return (
    <div className="page-container policy-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Privacy Policy</h1>
          <p>How we handle and protect your information.</p>
        </motion.div>

        <div className="policy-content-grid">
          <motion.div 
            className="policy-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <section>
              <h2>Information Collection</h2>
              <p>We collect information that you provide directly to us when you request a proposal or contact us. This may include your name, email address, and project details. We use this information solely to communicate with you and provide our services.</p>
            </section>

            <section>
              <h2>Data Usage</h2>
              <p>Your data is used to improve our services and respond to your inquiries. We do not sell or share your personal information with third parties for marketing purposes. All project-related data is handled with strict confidentiality.</p>
            </section>

            <section>
              <h2>Security</h2>
              <p>We implement industry-standard security measures to protect your information. While no method of transmission over the internet is 100% secure, we strive to use commercially acceptable means to protect your personal data.</p>
            </section>

            <section>
              <h2>Your Rights</h2>
              <p>You have the right to request access to the information we hold about you or ask for its deletion. If you have any questions about your privacy, please contact us at hello@design360.global.</p>
            </section>
          </motion.div>

          <motion.div 
            className="policy-image-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img src={policyImg} alt="Privacy and Security" className="policy-image" />
            <div className="image-overlay-text">
              <h3>Secure & Professional</h3>
              <p>Your data is as safe as your vision.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
