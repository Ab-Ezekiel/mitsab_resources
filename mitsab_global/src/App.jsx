import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop ";
import './App.css'

const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./pages/Header"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Teams = lazy(() => import("./pages/About/Teams"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const GetQuote = lazy(() => import("./pages/GetQuote")); 
const ServiceDetail = lazy(() => import("./pages/Services/ServiceDetail"));
const ProjectDetail = lazy(() => import("./pages/Project/ProjectDetail"))


const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="app-container">
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/project" element={<Project />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-quote" element={<GetQuote/>} />
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

