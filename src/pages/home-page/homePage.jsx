import React from "react";
import { Link } from "react-router-dom";

import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import Card from "../../component/pages/Card";

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
            <div className="home-cards">
                <Card 
                skills="Marketing"
                content="Qui id sint irure magna qui nostrud voluptate Lorem do. Incididunt ullamco pariatur incididunt nostrud est consectetur consequat veniam quis non pariatur fugiat Lorem. Consequat laboris commodo culpa mollit nisi incididunt mollit duis. Eu aliqua fugiat cupidatat sint id quis consequat qui duis eu est do enim do. Nisi incididunt eiusmod consequat laborum minim laboris Lorem excepteur reprehenderit." />
                
                <Card 
                skills="Coding"
                content="Qui id sint irure magna qui nostrud voluptate Lorem do. Incididunt ullamco pariatur incididunt nostrud est consectetur consequat veniam quis non pariatur fugiat Lorem. Consequat laboris commodo culpa mollit nisi incididunt mollit duis. Eu aliqua fugiat cupidatat sint id quis consequat qui duis eu est do enim do. Nisi incididunt eiusmod consequat laborum minim laboris Lorem excepteur reprehenderit." />
                
                <Card 
                skills="Internal"
                content="Qui id sint irure magna qui nostrud voluptate Lorem do. Incididunt ullamco pariatur incididunt nostrud est consectetur consequat veniam quis non pariatur fugiat Lorem. Consequat laboris commodo culpa mollit nisi incididunt mollit duis. Eu aliqua fugiat cupidatat sint id quis consequat qui duis eu est do enim do. Nisi incididunt eiusmod consequat laborum minim laboris Lorem excepteur reprehenderit." />
            </div>
        </React.Fragment>
    )
}

export default HomePage;