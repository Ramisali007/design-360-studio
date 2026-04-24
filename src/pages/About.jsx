import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Import image from "about us" folder
import aboutImg from '../assets/about us/about us.jpg';

const About = () => {
  return (
    <div className="page-container about-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Us</h1>
          <p>We are a community driven by passion for creativity.</p>
        </motion.div>

        <div className="about-content-wrapper">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img src={aboutImg} alt="The Design 360 Team" className="about-hero-image" />
          </motion.div>

          <div className="about-text-grid">
            <motion.div 
              className="about-text-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>The Design 360° Team</h2>
              <p>We are an international tight-knit community with a passion for creativity and technology. Our team consists of highly skilled artists, architects, and technologists working together to push the boundaries of visual storytelling.</p>
            </motion.div>

            <motion.div 
              className="about-text-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2>Trusted by many</h2>
              <p>We partner with the world's leading architectural firms, real estate developers, and creative agencies. Our collaborative approach ensures that every project meets the highest standards of quality and innovation.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
