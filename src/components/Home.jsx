import React from "react";
import Navbar from "./partials/Navbar";
import Searchbar from "./partials/Searchbar";

const Home = () => {
    document.title = "Fusion | Home";
    return (
        <div className="w-full">
            <Navbar />
            <Searchbar />
        </div>
    );
};

export default Home;
