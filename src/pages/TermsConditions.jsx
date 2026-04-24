import React from 'react';
import { motion } from 'framer-motion';
import './TermsConditions.css';

// Import some assets
import termsVideo from '../assets/services/architecture.mp4';

const TermsConditions = () => {
  return (
    <div className="page-container terms-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Terms & Conditions</h1>
          <p>The legal framework for our collaboration.</p>
        </motion.div>

        <div className="terms-content-wrapper">
          <motion.div 
            className="terms-video-container"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <video src={termsVideo} autoPlay loop muted playsInline className="terms-video"></video>
            <div className="terms-video-overlay">
              <h2>Design 360&deg; Standard Agreement</h2>
            </div>
          </motion.div>

          <div className="terms-text-container">
            <section>
              <h2>1. Scope of Service</h2>
              <p>Design 360° provides digital visual production services, including but not limited to 3D rendering, animation, and concept design. The specific scope of each project will be outlined in a separate Proposal or Statement of Work (SOW).</p>
            </section>

            <section>
              <h2>2. Intellectual Property</h2>
              <p>Unless otherwise agreed in writing, all draft materials and working files remain the property of Design 360°. Upon full payment of the project fees, the client is granted a perpetual, worldwide license to use the final deliverables for the intended purposes.</p>
            </section>

            <section>
              <h2>3. Payment Terms</h2>
              <p>Project fees are outlined in the proposal. We typically require a 50% deposit to commence work, with the remaining balance due upon delivery of final files. Delayed payments may result in a pause in production.</p>
            </section>

            <section>
              <h2>4. Revision Policy</h2>
              <p>We include a set number of revision rounds in our standard proposals. Major changes to the project scope after production has started may incur additional fees. We strive for excellence and will work closely with you to ensure satisfaction.</p>
            </section>

            <section>
              <h2>5. Confidentiality</h2>
              <p>We respect the confidentiality of your projects. Any proprietary information shared with us for the purpose of production will be kept confidential and not shared with third parties without your explicit consent.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
