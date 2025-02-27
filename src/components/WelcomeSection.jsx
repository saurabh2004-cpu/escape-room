"use client";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="welcome-section bg-black text-white py-5 h-100 private-escape-room-wrapper">
      <div className="container">
        <div className="row align-items-center">
          {/* Animated Welcome Title */}
          <motion.h3
            className="clr-red mb-3 mb-md-0 font-averia"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Welcome!
          </motion.h3>

          <div className="col-lg-6 d-lg-block position-relative bottom-25">
            {/* Animated Title */}
            <motion.div
              className="position-relative z-3 w-100"
              style={{ top: "110px" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h1 className="display-5 fw-bold mb-4 position-relative text-white start-0 top-50 translate-middle-y z-3 px-3 font-fjalla">
                PRIVATE ESCAPE ROOM ADVENTURES
              </h1>
            </motion.div>

            {/* Animated Image */}
            <motion.img
              src="/image/pirateImage.png"
              alt="Mysterious figure with lantern"
              className="img-fluid position-relative mb-n4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false }}
            />
          </div>

          {/* Right-Side Features with Staggered Animation */}
          <div className="col-lg-6 d-flex flex-column position-relative top-50 mt-5">
            <div className="features font-averia mt-5">
              {/* Feature 1 - Staggered Slide & Fade Animation */}
              <motion.div
                className="feature-item mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                <div className="d-flex align-items-start mt-4">
                  <span className="text-danger display-6 me-3">1</span>
                  <p className="fs-5 font-georgia">
                    Everything inside the room immerses you in the atmosphere of adventure: incredible decorations,
                    stunning effects, and shocking plot twists.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 - Delayed Animation */}
              <motion.div
                className="feature-item mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                <div className="d-flex align-items-start">
                  <span className="text-danger display-6 me-3">2</span>
                  <p className="fs-5 font-georgia">
                    You don't just solve the puzzles; you unravel a real detective story during your adventure.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 - Delayed Animation */}
              <motion.div
                className="feature-item mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                <div className="d-flex align-items-start">
                  <span className="text-danger display-6 me-3">3</span>
                  <p className="fs-5 font-georgia">
                    You get a private experience with your friends – just the closest and most trusted people, no
                    strangers.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
