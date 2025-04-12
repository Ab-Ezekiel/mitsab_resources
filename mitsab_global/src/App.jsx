import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'


const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./pages/Header"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Teams = lazy(() => import("./pages/About/Teams"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ServiceDetail = lazy(() => import("./pages/Services/ServiceDetail"));


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;

