'use client';
import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQSection = () => {
  return (
    <div
      className="position-relative text-white text-center py-5"
      style={{
        backgroundImage: "url('/image/3q.png')",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundColor: "#000",
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed'
      }}
    >
      {/* Dark Overlay */}
      {/* <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0, 0, 0, 0.7)" }}
      ></div> */}

      {/* FAQ Heading */}
      <div className="position-relative z-index-1">
        <p className="text-danger font-averia fs-2">FAQ</p>
        <h2 className="fw-bold display-5 font-arial">FIND ANSWERS TO ALL OF YOUR QUESTIONS HERE</h2>
      </div>

      {/* FAQ Content */}
      <Container className="position-relative z-index-1 mt-4 font-georgia">
        <Row>
          {/* Left Column */}
          <Col md={6}>
            <Accordion flush className="font-averia">
              {[
                "What is this?",
                "If I’m late, can I still play?",
                "I need to reschedule my reservation!",
                "How many people can play at once?",
                "Do I need a reservation?",
                "How much does it cost?",
              ].map((question, index) => (
                <Accordion.Item
                  eventKey={index}
                  key={index}
                  className="mb-3"
                  style={{
                    background: "black",
                    border: "2px solid grey",
                    borderRadius: "5px",
                  }}
                >
                  <Accordion.Header
                    style={{
                      background: "black",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    {question}
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      textAlign: "left",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>

          {/* Right Column */}
          <Col md={6}>
            <Accordion flush>
              {[
                "Is this a haunted house?",
                "How long do I have to complete the game?",
                "Are there any age restrictions for participants?",
                "Do I have to arrive in advance?",
                "What, if anything, should I bring to the game?",
                "Is it scary?",
              ].map((question, index) => (
                <Accordion.Item
                  eventKey={index + 6}
                  key={index + 6}
                  className="mb-3"
                  style={{
                    background: "black",
                    border: "2px solid grey",
                    borderRadius: "5px",
                  }}
                >
                  <Accordion.Header
                    style={{
                      background: "black",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    {question}
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      textAlign: "left",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQSection;
