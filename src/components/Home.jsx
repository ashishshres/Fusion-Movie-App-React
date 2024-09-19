import React, { useEffect, useState } from "react";
import Navbar from "./partials/Navbar";
import axios from "../utils/Axios";
import Header from "./partials/Header";
import TrendingCards from "./partials/TrendingCards";
import PopularCards from "./partials/PopularCards";
import TopRatedCards from "./partials/TopRatedCards";
import loading from "../../public/loading.mp4";

const Home = () => {
    document.title = "Fusion | Home";
    const [trendingBanner, setTrendingBanner] = useState(null);
    const [trending, setTrending] = useState(null);
    const [popular, setPopular] = useState(null);
    const [topRated, setTopRated] = useState(null);

    const getTrendingBanner = async () => {
        try {
            const { data } = await axios.get(
                `/trending/all/day?language=en-US`
            );
            const chooseBanner =
                data.results[(Math.random() * data.results.length).toFixed()];

            console.log(chooseBanner);
            setTrendingBanner(chooseBanner);
        } catch (error) {
            console.log(error);
        }
    };

    const getTrending = async () => {
        try {
            const { data } = await axios.get(
                `/trending/all/day?language=en-US`
            );
            setTrending(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getPopular = async () => {
        try {
            const { data } = await axios.get(`/movie/popular`);
            setPopular(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getTopRated = async () => {
        try {
            const { data } = await axios.get(`/movie/top_rated`);
            setTopRated(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        !trendingBanner && getTrendingBanner();
        !trending && getTrending();
        !popular && getPopular();
        !topRated && getTopRated();
    }, []);

    return trendingBanner && trending && popular && topRated ? (
        <div className="w-full h-full">
            <Navbar />
            <Header data={trendingBanner} />
            <TrendingCards data={trending} />
            <PopularCards data={popular} />
            <TopRatedCards data={topRated} />
        </div>
    ) : (
        <h1 className="text-4xl font-bold text-zinc-100">Loading</h1>
    );
};

export default Home;
