import React from "react";
import { Link } from "react-router-dom";

import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import PlayerCard from "../../component/pages/PlayerCard";

const AboutPage = () => {
    const player="Michael";
    const player2="Ben";
    const player3="Ervin";
    return (
        <React.Fragment>
            <Header />
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
                <PlayerCard name={player} />
                <PlayerCard name={player2} />
                <PlayerCard name={player3} />
            </div>
            
        </React.Fragment>
    )
}

export default AboutPage;