"use client";
import { useState, useEffect } from "react";
import styles from "./TestimonialSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For Custom Arrows

const testimonials = [
  {
    text: "This Game is Designed to give any group the experience they expect and deserve. Top Notch Innovation, Hats off to the creators",
    author: "Gowri Gopal",
    rating: 5,
  },
  {
    text: "Had an amazing time solving challenging puzzles. The staff was friendly and the overall experience was super fun! Highly recommend this escape room!",
    author: "Vaishnavi",
    rating: 4,
  },
  {
    text: "It was difficult to find a game that my family and friends enjoy, but this Escape Room was the perfect solution.",
    author: "Prasad",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.carouselWrapper}>
      <h3 className={styles.reviewTitle}>Review</h3>
      <h2 className={styles.mainTitle}>WHAT PLAYER SAYS</h2>

      <div className={styles.carouselContainer}>
        {/* Previous Button */}
        <button className={styles.arrowLeft} onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className={styles.carouselTrack}>
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`${styles.testimonialBox} ${
                  isActive ? styles.active : styles.inactive
                }`}
              >
                <p className={`${styles.testimonialText} font-averia`}>"{testimonial.text}"</p>
                <h4 className={`${styles.testimonialAuthor} font-averia`}>{testimonial.author}</h4>
                <div className={styles.stars}>
                  {"⭐".repeat(testimonial.rating)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button className={styles.arrowRight} onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
