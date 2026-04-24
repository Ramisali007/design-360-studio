import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleLogoClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${scrolled && !menuOpen ? 'glass' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="brand-logo" onClick={handleLogoClick}>
            DESIGN <span>360&deg;</span>
          </Link>

          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="menu-overlay-header">
              <Link to="/" className="brand-logo-dark" onClick={handleLogoClick}>
                <div className="blue-square"></div>
              </Link>
              <button className="menu-close" onClick={() => setMenuOpen(false)}>
                <X size={40} strokeWidth={1} />
              </button>
            </div>

            <div className="menu-content">
              <nav className="menu-main-links">
                <NavLink to="/works" onClick={() => setMenuOpen(false)}>Works</NavLink>
                <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
              </nav>

              <div className="menu-footer">
                <div className="menu-footer-grid">
                  <div className="menu-col">
                    <h4>General questions</h4>
                    <p>If you have a question or comment, please reach out:</p>
                    <a href="mailto:info@design360.com">info@design360.com</a>
                  </div>
                  <div className="menu-col">
                    <h4>Press inquiries</h4>
                    <p>For media inquiries and interview requests, please contact:</p>
                    <a href="mailto:press@design360.com">press@design360.com</a>
                  </div>
                  <div className="menu-col">
                    <h4>Join the team</h4>
                    <p>We welcome talents from all around the world.</p>
                    <a href="#">Go to job form</a>
                  </div>
                  <div className="menu-col menu-col-right">
                    <h3>Ready to discuss<br/>your next project?</h3>
                    <p>Preparing the groundwork for a rewarding business relationship and a successful project begins here. Tell us about your unique project by answering a couple of questions briefly.</p>
                    <Link to="/contact" className="request-link" onClick={() => setMenuOpen(false)}>
                      Request a Proposal <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
