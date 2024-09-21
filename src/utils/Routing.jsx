import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import Movie from "../components/Movie";
import Show from "../components/Show";
import People from "../components/People";

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
