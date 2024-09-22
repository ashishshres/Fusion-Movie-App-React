import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Trending from "../pages/Trending";
import Popular from "../pages/Popular";
import Movie from "../pages/Movie";
import Show from "../pages/Show";
import People from "../pages/People";
import MovieDetail from "../pages/MovieDetail";
import ShowDetail from "../pages/ShowDetail";
import PeopleDetail from "../pages/PeopleDetail";
import Trailer from "../components/Trailer";
import NotFound from "../components/NotFound";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/detail/:id" element={<MovieDetail />}>
                <Route path="/movie/detail/:id/trailer" element={<Trailer />} />
            </Route>
            <Route path="/tv" element={<Show />} />
            <Route path="/tv/detail/:id" element={<ShowDetail />}>
                <Route path="/tv/detail/:id/trailer" element={<Trailer />} />
            </Route>
            <Route path="/people" element={<People />} />
            <Route path="/people/detail/:id" element={<PeopleDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Routing;
