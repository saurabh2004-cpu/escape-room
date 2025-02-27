'use client'
import { motion } from "framer-motion";
export default function Hero() {

  const handleClick = () => {
    const audio = new Audio("/sound/walkman-button-272973.mp3");
    audio.playbackRate = 2;
    audio.play();
  };

  return (
    <div className="position-relative">
      <video className="hero-video " autoPlay loop muted playsInline>
        <source src="/videos/kilohhj.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <motion.h2
          className="hero-subtitle text-white font-averia"
          animate={{ x: ["100%", "-1%"] }} 
          transition={{ repeat: false, duration: 2, ease: "linear" }} 
        >
          Dive into the World of Puzzles
        </motion.h2>
        <div data-aos="slide-right">
          <h1 className="hero-title text-white font-fjalla  ">
            Welcome to the Ultimate
            <br />
            Escape Experience
          </h1>
        </div>

        <button
          className="btn cta-button btn-danger w-12 Choose-Adventure-wrapper font-fjalla py-3 px- fs-4 "
          data-aos="zoom-in"
          onClick={handleClick}
        >
          Choose Adventure
        </button>
      </div>
    </div>
  )
}

