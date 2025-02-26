
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const rooms = [
  {
    title: "The Ruins of Hampi",
    image: "/image/Screenshot_20250221_032247.png",
    difficulty: 3,
    frustration: 2,
    screwUp: 1,
    review: {
      name: "Hardi Buch",
      rating: 5,
      text: "We went for ruins of Hampi. It was a great experience. Would definitely recommend this place.",
      googleIcon: "/image/google-single.svg",
    },
    customers: "1250",
  },
  {
    title: "The Nuclear Bunker",
    image: "/image/Screenshot_20250221_093824.png",
    difficulty: 4,
    frustration: 3,
    screwUp: 2,
    review: {
      name: "John Doe",
      rating: 4,
      text: "A thrilling experience with unexpected twists. Would recommend to all adventure lovers!",
      googleIcon: "/image/google-single.svg",
    },
    customers: "750",
  },
  {
    title: "Deadly Chamber",
    image: "/image/Screenshot_20250221_094054.png",
    difficulty: 5,
    frustration: 4,
    screwUp: 3,
    review: {
      name: "Sarah Lee",
      rating: 5,
      text: "Challenging but super fun. The atmosphere was intense!",
      googleIcon: "/image/google-single.svg",
    },
    customers: "900",
  },
  {
    title: "Random",
    image: "/image/Screenshot_20250221_094203.png",
    difficulty: 3,
    frustration: 3,
    screwUp: 2,
    review: {
      name: "Mike Ross",
      rating: 4,
      text: "A well-designed room with great puzzles!",
      googleIcon: "/image/google-single.svg",
    },
    customers: "750",
  },
  {
    title: "Kill Bill",
    image: "/image/Screenshot_20250221_094257.png",
    difficulty: 4,
    frustration: 3,
    screwUp: 2,
    review: {
      name: "Lisa Wang",
      rating: 5,
      text: "A cinematic experience with awesome puzzles. Loved it!",
      googleIcon: "/image/google-single.svg",
    },
    customers: "600",
  },
];

export default function RoomsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const [countKey, setCountKey] = useState(0);

  return (
    <section className="position-relative py-5 our-rooms-wrapper">
      <div className="position-absolute top-0 start-0 w-100 h-100  opacity-85"></div>

      <div className="container position-relative z-2">
        <motion.div className="text-center mb-5" data-aos="fade-up" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h3 className="clr-red  mb-2 font-averia">Introducing Escape</h3>
          <h4 className="display-2 text-white  font-arial">OUR ROOMS</h4>
        </motion.div>

        {rooms.map((room, index) => (
          <motion.div
            key={index}
            className={`row align-items-center justify-content-center mb-5 mt-5 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
            data-aos="fade-up"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="col-lg-7">
              <motion.div className="d-flex flex-column flex-lg-row border border-danger rounded-4 overflow-hidden bg-black room-card" whileHover={{ scale: 1.05 }}>
                <div className="col-lg-7" data-aos="zoom-in">
                  <Image src={room.image} alt={room.title} width={500} height={500} className="w-100 h-100 w-md-49 object-fit-cover" />
                </div>
                <div className="col-lg-6 p-4" data-aos="fade-right ">
                  <h2 className="text-white mb-3 font-averia">
                    {room.title.split(" ")[0]} <span className="text-danger">{room.title.split(" ").slice(1).join(" ")}</span>
                  </h2>
                  <div className="text-white font-averia pt-5">
                    <p className="mb-1 fs-5"><span className="label">60 MIN.</span></p>
                    <p className="mb-1 fs-5"><span className="label">GENRE</span>: ADVENTURE</p>
                    <p className="mb-1 fs-5"><span className="label">TEAM</span>: 2 - 6 PEOPLE</p>
                    <p className="mb-3 fs-5"><span className="label">AGE</span>: 8+</p>

                    <motion.div className="text-start pt-5" whileHover={{ scale: 1.1 }}>
                      <button className="btn btn-danger btn-lg font-averia px-4 Book-Now-button-wrapper">
                        Book Now
                      </button>
                    </motion.div>
                  </div>


                </div>
              </motion.div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-start left-25 " data-aos="fade-up">
              <div className="p-3 rounded-4" style={{ backgroundColor: "rgba(109, 109, 109, 0.5)", boxShadow: "2px 3px 28px #ecdede" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="">
                    <h6 className="text-white mb-1 ">{room.review.name}</h6>
                    <span className="text-warning">{"★".repeat(room.review.rating)}</span>
                  </div>
                  <div>
                    <Image src={room.review.googleIcon} alt="Google" width={30} height={30} />
                  </div>
                </div>
                <p className="text-white mt-2">{room.review.text}</p>
              </div>
              <div className="text-center mt-4 text-white font-averia pt-5">
                <motion.h3
                  className="display-4 fw-bold text-white"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.5 }}
                  onViewportEnter={() => setCountKey(prev => prev + 1)} // Restart count when in view
                >
                  <CountUp key={countKey} start={0} end={Number(room.customers)} duration={1.5} />
                </motion.h3>
                <p className=" fs-3 clr-red ">Satisfied Customers</p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="text-center mt-5 font-averia " data-aos="zoom-in">
          <h3 className="clr-red fw-bold fs-2">THE GAMING THAT NEVER ENDS</h3>
        </div>
      </div>
    </section>
  );
}

