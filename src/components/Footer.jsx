import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <h2 className="footer-brand">DESIGN <span>360&deg;</span></h2>
            <p>Elevating great ideas. Global creative production studio translating ideas into high-end visual solutions.</p>
          </div>
          
          <div className="footer-col">
            <h3>Links</h3>
            <ul>
              <li><Link to="/works">Works</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services#architecture">Architecture</Link></li>
              <li><Link to="/services#real-estate">Real Estate</Link></li>
              <li><Link to="/services#product-brand">Product & Brand</Link></li>
              <li><Link to="/services#media-entertainment">Media & Entertainment</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:hello@design360.global">hello@design360.global</a></li>
              <li style={{marginTop: '1.5rem'}}>
                <Link to="/contact" className="footer-request-link">
                  REQUEST PROPOSAL
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom-new">
          <div className="footer-bottom-left">
            <span>&copy; {new Date().getFullYear()} Design 360&deg;.</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <span className="footer-office">Office: Design District, Dubai, UAE</span>
          </div>
          <div className="footer-bottom-right">
            <a href="mailto:hello@design360.global" className="footer-email">hello@design360.global</a>
            <div className="footer-social-icons">
              {/* LinkedIn SVG */}
              <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* WhatsApp SVG */}
              <a href="#" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 3.5z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="platform-text">UPWORK</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="platform-text">FIVERR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
