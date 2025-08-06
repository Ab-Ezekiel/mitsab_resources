import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { FaTimes, FaChevronDown } from "react-icons/fa"; // Import dropdown icon
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const navTabs = [
  { id: "home", name: "Home", path: "/" },
  { id: "about", name: "About Us", path: "/about" },
  { 
    id: "services", 
    name: "Services", 
    path: "/services",
    dropdown1: [
      { id: "construction-services", name: "Construction Services", path: "/services/construction-services" },
      { id: "project-and-program-management-services", name: "Project and Program Management Services", path: "/services/project-and-program-management-services" },
      { id: "manpower-supply-and-management-services", name: "Manpower Supply and Management Services", path: "/services/manpower-supply-and-management-services" },
      { id: "renovation-and-remodeling", name: "Renovation and Remodeling", path: "/services/renovation-and-remodeling" },
      { id: "minor-civil-maintenance-services", name: "Minor Civil Maintenance Services", path: "/services/minor-civil-maintenance-services" },
      { id: "welding-and-fabrication-services", name: "Welding and Fabrication Services", path: "/services/welding-and-fabrication-services" },
      { id: "earthwork-landscaping", name: "Earthwork Landscaping", path: "/services/earthwork-landscaping" },
      { id: "borehole-drilling-services", name: "Borehole Drilling Services", path: "/services/borehole-drilling-services" },
      { id: "pre-construction-services", name: "Pre-Construction Services", path: "/services/pre-construction-services" },
      { id: "cat-engine-repairs-and-maintenance", name: "CAT Engine Repairs & Maintenance", path: "/services/cat-engine-repairs-and-maintenance" },
      { id: "marine-services", name: "Marine Transportation Services", path: "/services/marine-services" },
      
  
    ],
  },
  { id: "project", name: "Projects", path: "/project" },
  { id: "blog", name: "Newsroom", path: "/blog" },
  { 
    id: "subsidiaries", 
    name: "Our Subsidiaries", 
    path: "/" ,
    dropdown2: [
      { id: "subsidiary-1", name: "T-SAB RESOURCES", path: "http://localhost:5174/"},
      { id: "subsidiary-2", name: "DE-ABSAREAL GLOBAL LIMITED", path: "http://localhost:5175/"},
      { id: "subsidiary-3", name: "MITSAB SECURITY SERVICES LIMITED", path: "http://localhost:5176/"},
    ]
  }
];


const Navbar = () => {
  const container = useRef(null);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);


  const handleScroll = () => {
    setVisible(window.scrollY > 145);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(".navbar", { y: -250 }, { y: 0, top: 0 });
    }
  }, [visible]);

  useGSAP(() => {
    gsap.timeline({ stagger: 0.5 })
      .from(".logo", { opacity: 0, x: -100, delay: 1 })
      .from(".tab", { opacity: 0, stagger: 0.5 })
      .from(".buttons", { opacity: 0, x: 100 });
  }, { scope: container });

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`} ref={container}>
      {open && <div className="sidebar_overlay" onClick={() => setOpen(false)}></div>}
      <Logo />
      <div className={`box nav_tabs ${open ? "open" : ""}`}>
        <div className="icon_container cancel_btn" onClick={() => setOpen(false)}>
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <div key={index} className="nav_tab">
            {tab.dropdown1 ? (
              <div
                className="dropdown"
                onMouseEnter={() => setOpenDropdownId(tab.id)}
                onMouseLeave={() => setOpenDropdownId(null)}
              >
                <span className="tab">
                  {tab.name}
                  <FaChevronDown className={`dropdown_icon ${openDropdownId === tab.id ? "open" : ""}`} />
                </span>
                {openDropdownId === tab.id && (
                  <ul className="dropdown_menu">
                    {tab.dropdown1.map((item) => (
                      <li key={item.id}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) => (isActive ? "dropdown_item active" : "dropdown_item")}
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            ) : tab.dropdown2 ? (
              <div
                className="dropdown"
                onMouseEnter={() => setOpenDropdownId(tab.id)}
                onMouseLeave={() => setOpenDropdownId(null)}
              >
                <span className="tab">
                  {tab.name}
                  <FaChevronDown className={`dropdown_icon ${openDropdownId === tab.id ? "open" : ""}`} />
                </span>
                {openDropdownId === tab.id && (
                  <ul className="dropdown_menu">
                    {tab.dropdown2.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dropdown_item"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            ) : (
              <NavLink
                to={tab.path}
                className={({ isActive }) => (isActive ? "tab active" : "tab")}
                onClick={() => setOpen(false)}
              >
                <p>{tab.name}</p>
              </NavLink>
            )}

          </div>
        ))}
      </div>
      <div className="box buttons">
        <NavLink to="/contact" className="btn contact_btn">
          Contact Us
        </NavLink>
        <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
