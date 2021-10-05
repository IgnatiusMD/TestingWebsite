import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../component/common/Navbar";
import Footer from "../../component/common/Footer";
import PlayerCard from "../../component/pages/PlayerCard";

const AboutPage = () => {
    const player="Michael";
    const player2="Ben";
    const player3="Ervin";
    return (
        <React.Fragment>
            <Navbar />
            <div className="about-title">
                ABOUT PAGE
            </div>
            <Link to="/">
                <button>
                    To Home Page
                </button>
            </Link>
            <Footer />
            <div className="about-card">
                <PlayerCard name={player} age="19" />
                <PlayerCard name={player2} age="18" />
                <PlayerCard name={player3} age="20" />
            </div>
        </React.Fragment>
    )
}

export default AboutPage;