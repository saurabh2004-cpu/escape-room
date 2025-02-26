import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
return (
    <>
<div className="text-white py-5 font-averia" style={{ backgroundColor: "#000" , borderTop: "5px solid #222" , textAlign: "center" ,
    }}>
    <Container>
        <Row className="gy-4">
            {/* Logo & Description */}
            <Col md={3} className="text-md-start text-center">
            <img src="/image/escapeRoomLogo.png" alt="Escape Room" style={{ width: "150px" , marginBottom: "10px" }} />
            <p style={{ fontSize: "14px" , color: "#bbb" }}>
                The concept of Escape Rooms was started in 2011, and we introduced
                it in Bangalore in 2014. We were surprised to find that the city
                didn’t have Escape Rooms.
            </p>
            </Col>

            {/* Useful Links */}
            <Col md={3}>
            <h5 className=" text-start font-fjalla">USEFUL LINKS</h5>
            <ul className="list-unstyled text-start" style={{ fontSize: "14px" , color: "#bbb" }}>
                <li><a href="#" className="text-decoration-none text-white">Contact</a></li>
                <li><a href="#" className="text-decoration-none text-white">Games</a></li>
                <li><a href="#" className="text-decoration-none text-white">FAQs</a></li>
                <li><a href="#" className="text-decoration-none text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-decoration-none text-white">Terms & Conditions</a></li>
            </ul>
            </Col>

            {/* Social Links */}
            <Col md={3}>
            <h5 className="font-fjalla text-start">SOCIAL LINK</h5>
            <ul className="list-unstyled text-start " style={{ fontSize: "14px" , color: "#bbb" }}>
                <li><a href="#" className="text-decoration-none text-white">Facebook</a></li>
                <li><a href="#" className="text-decoration-none text-white">Instagram</a></li>
                <li><a href="#" className="text-decoration-none text-white">YouTube</a></li>
                <li><a href="#" className="text-decoration-none text-white">LinkedIn</a></li>
                <li><a href="#" className="text-decoration-none text-white">Twitter</a></li>
            </ul>
            </Col>

            {/* Contact Info */}
            <Col md={3} className="text-md-start font-averia ">
            <h5 className="font-fjalla">CONTACT</h5>
            <p style={{ fontSize: "14px" , color: "#bbb" }}>
                Address: No 12, 3rd Floor, Pragati Mansion, 1st Cross Rd,
                5th Block, Koramangala, Karnataka 560034
            </p>
            <p style={{ fontSize: "14px" , color: "#bbb" }}>
                Phone: <a href="tel:+917676372273" className="text-white">+91 76763 72273</a>
            </p>
            <p style={{ fontSize: "14px" , color: "#bbb" }}>
                Email: <a href="mailto:info@escapemgm.com" className="text-white">info@escapemgm.com</a>
            </p>
            </Col>
        </Row>
    </Container>
 
  
</div>
 {/* Footer Bottom */}
 <div className=" text-center bottom-footer-wrapper font-averia" style={{ fontSize: "12px" , color: "#777" ,height:'100%'}}>
  Designed by <span className="text-white">Canvas Chrome Designs</span>
</div>
</>
);
};

export default Footer;