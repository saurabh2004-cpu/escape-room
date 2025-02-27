'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Navbar() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Games", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Bulk Booking", href: "#" },
    { label: "Events", href: "#" },
    { label: "Rooms", href: "#" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          <motion.div 
            className="contact-info mb-2 mb-md-0" 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            info@escapemgm.com
          </motion.div>

          <motion.div 
            className="social-links d-flex flex-wrap justify-content-center gap-2 font-arial" 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" className="text-white text-decoration-none">YouTube</a> |
            <a href="#" className="text-white text-decoration-none">Facebook</a> |
            <a href="#" className="text-white text-decoration-none">Instagram</a> |
            <a href="#" className="text-white text-decoration-none">LinkedIn</a>
          </motion.div>
        </div>
      </div>

      {/* Navbar */}
      <motion.nav 
        className="navbar navbar-expand-lg navbar-dark sticky-top navbar-wrapper shadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              src="/image/escapeRoomLogo.png"
              alt="Escape Room Logo"
              width={180}
              height={60}
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse font-arial " id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item, index) => (
                <motion.li 
                  className="nav-item mx-2" 
                  key={item.label}
                  whileHover={{ scale: 1.1, color: "#ff4d4d" }}
                >
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Animated WhatsApp Button */}
            <motion.a 
              href="#" 
              className="btn btn-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "white", fontSize: "20px" }} />
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
