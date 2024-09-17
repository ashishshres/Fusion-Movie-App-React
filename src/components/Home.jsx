import React from "react";
import Navbar from "./partials/Navbar";

const Home = () => {
    document.title = "Fusion | Home";
    return (
        <div className="w-full">
            <Navbar />
        </div>
    );
};

export default Home;
