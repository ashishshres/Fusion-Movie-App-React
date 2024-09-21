import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Trending from "../pages/Trending";
import Popular from "../pages/Popular";
import Movie from "../pages/Movie";
import Show from "../pages/Show";
import People from "../pages/People";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/show" element={<Show />} />
            <Route path="/people" element={<People />} />
        </Routes>
    );
};

export default Routing;
