export default function WelcomeSection() {
    return (
        <section className="welcome-section bg-black text-white py-5 h-100  private-escape-room-wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <h3 className="text-danger mb-3 font-averia">Welcome!</h3>
                    <div className="col-lg-6  d-lg-block position-relative bottom-25">
                        {/* Image Wrapper */}
                        <div className="position-relative z-3 w-100"style={{ top: "110px" }}>
                            <h1 className="display-5 fw-bold mb-4 position-relative text-white start-0 top-50  translate-middle-y z-3 px-3 font-fjalla " >
                                PRIVATE ESCAPE ROOM ADVENTURES
                            </h1>
                        </div>
                        <img
                            src="/image/pirateImage.png"
                            alt="Mysterious figure with lantern"
                            className="img-fluid position-relative mb-n4 "
                        />
                    </div>
                    <div className="col-lg-6 d-flex flex-column position-relative top-50 ">


                        <div className="features font-averia ">
                            <div className="feature-item mb-4 ">
                                <div className="d-flex align-items-start">
                                    <span className="text-danger display-6 me-3">1</span>
                                    <p className="fs-5 font-georgia">
                                        Everything inside the room immerses you in the atmosphere of adventure: incredible decorations,
                                        stunning effects, and shocking plot twists.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-item mb-4">
                                <div className="d-flex align-items-start">
                                    <span className="text-danger display-6 me-3">2</span>
                                    <p className="fs-5 font-georgia">
                                        You don't just solve the puzzles; you unravel a real detective story during your adventure.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-item mb-4">
                                <div className="d-flex align-items-start">
                                    <span className="text-danger display-6 me-3">3</span>
                                    <p className="fs-5 font-georgia">
                                        You get a private experience with your friends – just the closest and most trusted people, no
                                        strangers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

