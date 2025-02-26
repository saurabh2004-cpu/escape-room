import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamSection = () => {
  return (
    <section className="position-relative text-center text-white d-flex flex-column align-items-center justify-content-center min-vh-100">
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <img
          src="https://escapemgm.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-23-at-12.06.10-PM-1-1024x762.jpeg"
          alt="Escape Room"
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Overlay for Better Readability */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Content */}
      <div className="container position-relative z-3">
        <p className="lead font-averia clr-red fs-1">Bring your team together!</p>
        <h1 className="display-1 px-2">WORK TOGETHER TO SOLVE</h1>
        <h1 className="display-1 px-2">A SERIES OF RIDDLES</h1>
      </div>
    </section>
  );
};

export default TeamSection;
