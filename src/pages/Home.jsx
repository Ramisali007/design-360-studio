import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';

// Import assets
import heroVideo from '../assets/landing page/[Hero Showreel Video Placeholder].mp4';
import archImg from '../assets/landing page/[Image Architecture].jpg';
import realEstateImg from '../assets/landing page/[Image Real Estate].jpg';
import productImg from '../assets/landing page/[Image Product & Brand].jpg';
import mediaImg from '../assets/landing page/media and entertainment .jpg';
import feat1 from '../assets/landing page/Featured Project 1.jpg';
import feat2 from '../assets/landing page/Featured Project 2.jpg';
import feat3 from '../assets/landing page/Featured Project 3.jpg';
import feat4 from '../assets/landing page/Featured Project 4.jpg';

const Home = () => {
  const services = [
    { name: 'Architecture', img: archImg },
    { name: 'Real Estate', img: realEstateImg },
    { name: 'Product & Brand', img: productImg },
    { name: 'Media & Entertainment', img: mediaImg }
  ];

  const featuredProjects = [
    { title: 'The Glass Horizon', desc: 'Luxury Residential Tower', img: feat1 },
    { title: 'Oasis Resort', desc: 'Hospitality & Leisure', img: feat2 },
    { title: 'Lumina Center', desc: 'Commercial Complex', img: feat3 },
    { title: 'Echo Park Pavilion', desc: 'Public Architecture', img: feat4 }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevating<br/>great ideas
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Design 360&deg; is an international creative production studio that translates great ideas into high-end visual solutions.
          </motion.p>
          
          <motion.div 
            className="hero-media-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'left' }}>Our Global Showreel</p>
            <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="hero-video" 
              src={heroVideo}
            ></video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-overview section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise</h2>
            <Link to="/services" className="see-more">See all services <ArrowRight size={18} /></Link>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <img src={service.img} alt={service.name} className="service-image" />
                <div className="service-content">
                  <h3 style={{ color: '#ffffff' }}>{service.name}</h3>
                  <Link to="/services" className="btn btn-outline" style={{ color: '#ffffff', borderColor: '#ffffff' }}>Explore</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="about-brief section-padding">
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>We are an international tight-knit community with a passion for creativity and technology.</h2>
            <Link to="/about" className="btn btn-primary" style={{marginTop: '2rem'}}>Read More</Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="works-highlight section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Highlights</h2>
            <p className="subtitle-text">A showcase of diverse, successful projects reflecting the range and depth of our visual storytelling.</p>
          </div>
          
          <div className="works-grid">
            {featuredProjects.map((item, index) => (
              <motion.div 
                key={index} 
                className="work-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px', group: 'hover' }}>
                  <img src={item.img} alt={item.title} className="work-image" style={{ marginBottom: 0 }} />
                </div>
                <div className="work-info" style={{ marginTop: '1rem' }}>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="center-action" style={{marginTop: '4rem', textAlign: 'center'}}>
            <Link to="/works" className="btn btn-outline">More Works</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
