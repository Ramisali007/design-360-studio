# Design 360&deg; — Creative Production Studio

![Design 360 Banner](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)

Design 360&deg; is a premier international creative production studio translating great ideas into high-end visual solutions. This repository contains the official agency website, featuring a cinematic, minimalist, and premium user experience tailored for architectural and branding excellence.

## ✨ Key Features

- **Cinematic Experience:** High-end video and image integration across all pages.
- **Dynamic Portfolio:** A robust project showcase with individual, detailed case study pages.
- **Service Specialization:** Dedicated sections for Architecture, Real Estate, Product & Brand, and Media.
- **Fully Responsive:** Optimized for a seamless experience across desktop, tablet, and mobile devices.
- **Premium Animations:** Smooth page transitions and interactive elements powered by Framer Motion.
- **Functional Contact Form:** Background email notifications integrated with EmailJS.
- **Legal Compliance:** Professional Privacy Policy and Terms & Conditions pages.

## 🚀 Technologies Used

- **Frontend:** React.js (Vite)
- **Styling:** Vanilla CSS (Custom Design System)
- **Animations:** Framer Motion
- **Icons:** Lucide React & Custom Inline SVGs
- **Routing:** React Router v7
- **Email Service:** EmailJS

## 📦 Getting Started

### Prerequisites

- Node.js (v18.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/design-360-studio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd design-360-studio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the site.

## 🏗️ Folder Structure

```text
src/
├── assets/          # Project images and videos categorized by page
├── components/      # Reusable UI components (Navbar, Footer, etc.)
├── pages/           # Page-level components and their CSS
├── App.jsx          # Main application component & routes
├── index.css        # Global styles and design tokens
└── main.jsx         # Application entry point
```

## 🛠️ Optimization for Deployment

The project is optimized for performance using:
- **Code Splitting:** Lazy-loading routes for faster initial load.
- **Media Control:** Optimized aspect ratios and `object-fit` properties to prevent lag and layout shifts.
- **Production Build:** Standardized minification via Vite.

To build for production:
```bash
npm run build
```

## 📧 Contact & Support

- **Website:** [www.design360.global](http://www.design360.global)
- **Email:** hello@design360.global
- **Socials:** [LinkedIn](#) | [WhatsApp](#)

---

&copy; 2024 Design 360&deg;. All Rights Reserved.
