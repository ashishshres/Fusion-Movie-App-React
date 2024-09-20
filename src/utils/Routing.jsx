import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
        </Routes>
    );
};

export default Routing;
