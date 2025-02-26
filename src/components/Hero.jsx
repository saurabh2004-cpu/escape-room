export default function Hero() {
  return (
    <div className="position-relative">
      <video className="hero-video " autoPlay loop muted playsInline>
        <source src="/videos/kilohhj.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h2 className="hero-subtitle text-white font-averia">Dive into the World of Puzzles</h2>
        <h1 className="hero-title text-white font-fjalla  ">
          Welcome to the Ultimate
          <br />
          Escape Experience
        </h1>

        <button className="btn cta-button btn-danger w-12 Choose-Adventure-wrapper font-fjalla">Choose Adventure</button>
      </div>
    </div>
  )
}

