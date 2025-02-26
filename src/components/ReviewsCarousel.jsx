'use client';
import { Carousel } from 'react-bootstrap';
import styles from './TestimonialSlider.module.css';

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
  }
];

export default function TestimonialSlider() {
  return (
    <section className=' review-cruosel-wrapper'>
    <div className={styles.testimonialContainer }>
      <h3 className={styles.reviewTitle} ><span className='font-averia fs-2'>Review</span></h3>
      <h2 className={styles.mainTitle}>WHAT PLAYER SAYS</h2>
      <Carousel className={styles.carousel} indicators={false} interval={3000} wrap={true} controls={true}>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index} className={styles.carouselItem}>
            <div className={styles.testimonialWrapper}>
              <div className={`${styles.testimonialBox} ${index === 1 ? styles.active : ''}`}>
                <p className={styles.text}>“{testimonial.text}”</p>
                <h4 className={styles.author}>{testimonial.author}</h4>
                <div className={styles.stars}>{'⭐'.repeat(testimonial.rating)}</div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </section>
  );
}
