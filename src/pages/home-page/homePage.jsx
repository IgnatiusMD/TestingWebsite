import React from "react";
import { Link } from "react-router-dom";

import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";

const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="home-title">
                HOME PAGE
            </div>
            <Link to="/about">
                <button>
                    To About Page
                </button>
            </Link>
            <Footer />
        </React.Fragment>
    )
}

export default HomePage;