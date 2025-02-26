import React from "react";
import { FaUsers, FaPuzzlePiece, FaFlag, FaUsersCog } from "react-icons/fa"; // Importing icons

export default function GamesSection() {
    const gameCategories = [
        {
            icon: <FaUsers size={40} className="text-danger mb-3" />,
            title: "FRIENDS & FAMILIES",
            description: "Experience the exciting adventure with your family and friends!",
        },
        {
            icon: <FaPuzzlePiece size={40} className="text-danger mb-3" />,
            title: "HOBBY DETECTIVES",
            description: "You are a hobby detective yourself or have a very special idea for your date.",
        },
        {
            icon: <FaFlag size={40} className="text-danger mb-3" />,
            title: "TRENDSETTERS",
            description: "Are you bored and looking for new challenges?",
        },
        {
            icon: <FaUsersCog size={40} className="text-danger mb-3" />,
            title: "TEAMBUILDING",
            description: "Corporate event to build the team spirit in your company.",
        },
    ];

    return (<>
        <section className="games-section text-white text-center py-5  bg-black">
            <div className="container">
                {/* Heading Section */}
                <h5 className="text-danger  font-averia fs-3">Quest rooms for every taste!</h5>
                <h1 className="display-4 ">OUR GAMES ARE PERFECT FOR</h1>

                {/* Game Categories */}
                <div className="row mt-4">
                    {gameCategories.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-3 mb-4">
                            <div className="p-2">
                                {item.icon}
                                <h5 className=" mt-2">{item.title}</h5>
                                <p className="text-white-50 font-averia">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

        
    </>
    );
}
