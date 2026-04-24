import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './ProjectDetail.css';

// Import images (same as in Works.jsx)
import work1 from '../assets/work-page/pexels-adrien-olichon-1257089-3137071.jpg';
import work2 from '../assets/work-page/pexels-aysegul-aytoren-46790226-12257034.jpg';
import work3 from '../assets/work-page/pexels-eshwar-charan-2148201627-30057909.jpg';
import work4 from '../assets/work-page/pexels-happy-guy-2154039137-35239278.jpg';
import work5 from '../assets/work-page/pexels-holmboe-35568328.jpg';
import work6 from '../assets/work-page/pexels-jan-van-der-wolf-11680885-34054383.jpg';
import work7 from '../assets/work-page/pexels-nils-rotura-2157795908-35011638.jpg';
import work8 from '../assets/work-page/pexels-sudden-click-25-2149953593-36734904.jpg';

const projectsData = {
  '1': {
    title: 'Urban Symmetry',
    category: 'Architecture / Commercial',
    img: work1,
    description: 'Urban Symmetry explores the intersection of geometric precision and modern urban living. This commercial project focuses on a high-tech office complex that blends seamlessly into the city skyline, featuring a glass facade that reflects the surrounding urban environment.',
    details: [
      { label: 'Client', value: 'Nexus Corp' },
      { label: 'Location', value: 'Singapore' },
      { label: 'Year', value: '2024' },
      { label: 'Service', value: 'Full CGI Production' }
    ]
  },
  '2': {
    title: 'Serene Interiors',
    category: 'Interior Design / Residential',
    img: work2,
    description: 'A study in tranquility and light. Serene Interiors showcases a luxury residential penthouse where every element is designed to promote calm and mindfulness. The project highlights the use of natural materials and soft, ambient lighting to create a truly peaceful living space.',
    details: [
      { label: 'Client', value: 'Private Owner' },
      { label: 'Location', value: 'Dubai' },
      { label: 'Year', value: '2023' },
      { label: 'Service', value: 'Interior Visualization' }
    ]
  },
  '3': {
    title: 'Golden Hour Vista',
    category: 'Landscape / Architectural',
    img: work3,
    description: 'Golden Hour Vista captures a mountain-side retreat at the most magical time of day. This architectural visualization project emphasizes the harmony between built structures and the natural landscape, using warm sunlight and long shadows to evoke a sense of warmth and solitude.',
    details: [
      { label: 'Client', value: 'Summit Resorts' },
      { label: 'Location', value: 'Switzerland' },
      { label: 'Year', value: '2024' },
      { label: 'Service', value: 'Landscape Design Visuals' }
    ]
  },
  '4': {
    title: 'Modern Minimalist',
    category: 'Product / Branding',
    img: work4,
    description: 'Breaking down design to its core essentials. Modern Minimalist is a product branding campaign for a premium furniture line. We used high-end CGI to showcase the fine craftsmanship and elegant lines of each piece against a minimalist, studio-lit backdrop.',
    details: [
      { label: 'Client', value: 'Forma Design' },
      { label: 'Location', value: 'Milan' },
      { label: 'Year', value: '2023' },
      { label: 'Service', value: 'Product CGI' }
    ]
  },
  '5': {
    title: 'The Atrium',
    category: 'Architecture / Public Space',
    img: work5,
    description: 'The Atrium is a conceptual public space project designed for social interaction and light. The massive glass ceiling and open-plan floors create a sense of scale and freedom, while the lush interior greenery brings a piece of nature into the heart of the building.',
    details: [
      { label: 'Client', value: 'City Council' },
      { label: 'Location', value: 'London' },
      { label: 'Year', value: '2024' },
      { label: 'Service', value: 'Architectural Visualization' }
    ]
  },
  '6': {
    title: 'Industrial Loft',
    category: 'Real Estate / Interior',
    img: work6,
    description: 'Converting history into luxury. This industrial loft project transforms an old warehouse into a high-end living space. We highlighted the raw textures of brick and steel, balancing them with modern furnishings and expansive windows to create a sophisticated urban home.',
    details: [
      { label: 'Client', value: 'Loft Living' },
      { label: 'Location', value: 'New York' },
      { label: 'Year', value: '2023' },
      { label: 'Service', value: 'Interior CGI' }
    ]
  },
  '7': {
    title: 'Skyline Reflections',
    category: 'Media / Entertainment',
    img: work7,
    description: 'A cinematic exploration of the modern skyline. Skyline Reflections was created for a major media production, focusing on the dynamic relationship between water, light, and architectural glass. Every frame is designed to look like a still from a high-budget film.',
    details: [
      { label: 'Client', value: 'Visionary Films' },
      { label: 'Location', value: 'Los Angeles' },
      { label: 'Year', value: '2024' },
      { label: 'Service', value: 'Cinematic Visualization' }
    ]
  },
  '8': {
    title: 'Geometric Flow',
    category: 'Concept Art / Visuals',
    img: work8,
    description: 'Geometric Flow pushes the boundaries of traditional architectural forms. This concept art project explores fluid, organic shapes created through mathematical algorithms, resulting in a structure that feels both alien and perfectly at home in its environment.',
    details: [
      { label: 'Client', value: 'Design Expo' },
      { label: 'Location', value: 'Berlin' },
      { label: 'Year', value: '2024' },
      { label: 'Service', value: 'Concept Visualization' }
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/works" className="btn btn-outline" style={{ marginTop: '2rem' }}>Back to Works</Link>
      </div>
    );
  }

  return (
    <div className="page-container project-detail-page">
      <div className="container">
        <motion.div 
          className="back-button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/works" className="back-link">
            <ArrowLeft size={20} /> Back to Works
          </Link>
        </motion.div>

        <div className="project-detail-grid">
          <motion.div 
            className="project-main-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="detail-image-wrapper">
              <img src={project.img} alt={project.title} className="detail-image" />
            </div>
          </motion.div>

          <motion.div 
            className="project-info-sidebar"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="project-header-info">
              <p className="project-category">{project.category}</p>
              <h1>{project.title}</h1>
            </div>

            <div className="project-description">
              <h3>About the project</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-meta-grid">
              {project.details.map((detail, index) => (
                <div key={index} className="meta-item">
                  <span className="meta-label">{detail.label}</span>
                  <span className="meta-value">{detail.value}</span>
                </div>
              ))}
            </div>
            
            <div className="project-cta">
              <Link to="/contact" className="btn btn-primary">Enquire about this project</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
