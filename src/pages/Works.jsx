import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Works.css';

// Import images from "work page" folder
import work1 from '../assets/work page/pexels-adrien-olichon-1257089-3137071.jpg';
import work2 from '../assets/work page/pexels-aysegul-aytoren-46790226-12257034.jpg';
import work3 from '../assets/work page/pexels-eshwar-charan-2148201627-30057909.jpg';
import work4 from '../assets/work page/pexels-happy-guy-2154039137-35239278.jpg';
import work5 from '../assets/work page/pexels-holmboe-35568328.jpg';
import work6 from '../assets/work page/pexels-jan-van-der-wolf-11680885-34054383.jpg';
import work7 from '../assets/work page/pexels-nils-rotura-2157795908-35011638.jpg';
import work8 from '../assets/work page/pexels-sudden-click-25-2149953593-36734904.jpg';

const Works = () => {
  const projects = [
    { id: 1, title: 'Urban Symmetry', category: 'Architecture / Commercial', img: work1 },
    { id: 2, title: 'Serene Interiors', category: 'Interior Design / Residential', img: work2 },
    { id: 3, title: 'Golden Hour Vista', category: 'Landscape / Architectural', img: work3 },
    { id: 4, title: 'Modern Minimalist', category: 'Product / Branding', img: work4 },
    { id: 5, title: 'The Atrium', category: 'Architecture / Public Space', img: work5 },
    { id: 6, title: 'Industrial Loft', category: 'Real Estate / Interior', img: work6 },
    { id: 7, title: 'Skyline Reflections', category: 'Media / Entertainment', img: work7 },
    { id: 8, title: 'Geometric Flow', category: 'Concept Art / Visuals', img: work8 },
  ];

  return (
    <div className="page-container works-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Selected Works</h1>
          <p>Explore our portfolio of high-end visual solutions.</p>
        </motion.div>

        <div className="works-grid-full">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="work-item-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
            >
              <Link to={`/works/${project.id}`} className="project-link">
                <div className="work-image-wrapper">
                  <img src={project.img} alt={project.title} className="work-image-full" />
                </div>
                <div className="work-info-full">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
