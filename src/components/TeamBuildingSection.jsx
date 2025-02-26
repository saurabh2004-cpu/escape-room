import React from "react";
// add background mage
export default function TeamBuildingSection() {
  return (
    <section
      className="team-building-section position-relative text-white"
     
    >

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Side - Title & Button */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h5 className="text-danger fw-bold font-averia fs-1">Corporate</h5>
            <h1 className="display-4 fw-bold font-arial ">A NEW BREED OF CORPORATE TEAM BUILDING</h1>
            <button className="btn btn-danger btn-lg Choose-Adventure-wrapper mt-3 px-8 w-12 font-fjalla fs-5">BOOK NOW</button>
          </div>

          {/* Right Side - Description */}
          <div className="col-lg-6 font-averia">
            <p className="fs-5">
              We all want to be known as the “cool boss” … Well, here’s a perfect opportunity to claim your new title. 
              Bring your team to Exit Game and boost morale while also learning valuable lessons in communication, 
              organization, and critical thinking.
            </p>
            <p className="fs-5">
              After you complete the room, you will receive a 10–15-minute analysis of your team’s strengths and 
              weaknesses as well as individual player stats.
            </p>
            <p className="fs-6">
              Interested in bringing your team? <br />
              Give us a call <span className="text-danger fw-bold">076763 72273</span> or{" "}
              <a href="mailto:contact@exitgame.com" className="text-danger fw-bold">
                send us an email
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

