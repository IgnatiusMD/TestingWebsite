import React from "react";
import { Link } from "react-router-dom";

import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";

const AboutPage = () => {
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
        </React.Fragment>
    )
}

export default AboutPage;