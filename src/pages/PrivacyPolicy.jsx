import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

// Import some assets to make the page look good
import policyImg from '../assets/landing page/[Image Architecture].jpg';

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
          <p>Your privacy is important to us. Here is how we handle your data.</p>
        </motion.div>

        <div className="policy-content-grid">
          <motion.div 
            className="policy-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <section>
              <h2>1. Introduction</h2>
              <p>At Design 360°, we are committed to protecting the privacy and security of our clients and website visitors. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services or visit our website.</p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <p>We may collect personal information such as your name, email address, and company details when you contact us for proposals or project inquiries. We also collect non-personal data through cookies to improve your browsing experience.</p>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>Your information is used solely for providing our visual production services, communicating about your projects, and improving our internal processes. We never sell or share your data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2>4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. All project files and communications are stored on secure, encrypted servers.</p>
            </section>

            <section>
              <h2>5. Contact Us</h2>
              <p>If you have any questions about our privacy practices, please contact us at hello@design360.global.</p>
            </section>
          </motion.div>

          <motion.div 
            className="policy-image-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img src={policyImg} alt="Privacy at Design 360" className="policy-image" />
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
