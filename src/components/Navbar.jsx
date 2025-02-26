'use client';
import React, { useEffect } from "react";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // ✅ Yeh brands wale icons ke liye hai

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
      <div className="bg-dark text-white py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          {/* Contact Info */}
          <div className="contact-info mb-2 mb-md-0">info@escapemgm.com</div>

          {/* Social Links */}
          <div className="social-links d-flex flex-wrap justify-content-center gap-2">
            <a href="#" className="text-white text-decoration-none">YouTube</a> |
            <a href="#" className="text-white text-decoration-none">Facebook</a> |
            <a href="#" className="text-white text-decoration-none">Instagram</a> |
            <a href="#" className="text-white text-decoration-none">LinkedIn</a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-wrapper">
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item, index) => (
                <li className="nav-item mx-2" key={item.label}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>
            <div className="d-flex align-items-center">

              <a href="#" className="btn-whatsapp-pulse btn-whatsapp-pulse-border me-2">

                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "white", fontSize: "24px" }} />
              </a>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

