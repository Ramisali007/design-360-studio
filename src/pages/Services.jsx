import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

// Import videos from "services" folder
import archVideo from '../assets/services/architecture.mp4';
import realEstateVideo from '../assets/services/real estate.mp4';
import productVideo from '../assets/services/product brand.mp4';
import mediaVideo from '../assets/services/Media & Entertainment.mp4';

const Services = () => {
  const servicesList = [
    {
      id: "architecture",
      title: "Architecture",
      description: "We create evocative architectural visualizations that capture the essence of your design. From high-end residential to large-scale commercial projects, our imagery tells a compelling story.",
      features: ["Exterior Visualization", "Interior Visualization", "Masterplan & Aerial", "Concept Design"],
      video: archVideo
    },
    {
      id: "real-estate",
      title: "Real Estate",
      description: "Elevating property marketing with stunning visual content. We provide everything needed for a successful real estate campaign before the first brick is laid.",
      features: ["Marketing CGI", "Virtual Tours", "Animation", "Floor Plans"],
      video: realEstateVideo
    },
    {
      id: "product-brand",
      title: "Product & Brand",
      description: "High-end product visualization and brand storytelling. We bring products to life through photorealistic CGI and creative animation.",
      features: ["Product Rendering", "Brand Films", "Interactive Configurator", "Packaging Visualization"],
      video: productVideo
    },
    {
      id: "media-entertainment",
      title: "Media & Entertainment",
      description: "Creating immersive worlds and visual effects for film, television, and gaming. Our dedicated team of artists push the boundaries of digital content creation.",
      features: ["Environment Design", "Matte Painting", "VFX", "Cinematics"],
      video: mediaVideo
    }
  ];

  return (
    <div className="page-container services-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Services</h1>
          <p>Comprehensive visual solutions tailored to your industry.</p>
        </motion.div>

        <div className="services-list-container">
          {servicesList.map((service, index) => (
            <div className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`} key={index} id={service.id}>
              <motion.div 
                className="service-text"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
              >
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="service-visual"
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="service-video-container">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="service-video" 
                    src={service.video}
                  ></video>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
