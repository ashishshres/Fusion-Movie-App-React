import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "../utils/Axios";
import Header from "../components/Header";
import TrendingCards from "../components/TrendingCards";
import PopularCards from "../components/PopularCards";
import Loader from "../components/Loader";
import PlayingCards from "../components/PlayingCards";
import ShowCards from "../components/ShowCards";
import Footer from "../components/Footer";

const Home = () => {
    document.title = "Fusion | Home";
    const [trendingBanner, setTrendingBanner] = useState(null);
    const [trending, setTrending] = useState(null);
    const [popular, setPopular] = useState(null);
    const [playing, setPlaying] = useState(null);
    const [shows, setShows] = useState(null);

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

    const getPlaying = async () => {
        try {
            const { data } = await axios.get(`/movie/now_playing`);
            setPlaying(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getShows = async () => {
        try {
            const { data } = await axios.get(`/tv/airing_today`);
            setShows(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        !trendingBanner && getTrendingBanner();
        !trending && getTrending();
        !popular && getPopular();
        !playing && getPlaying();
        !shows && getShows();
    }, []);

    return trendingBanner && trending && popular && playing && shows ? (
        <div className="w-full h-full">
            <Navbar />
            <Header data={trendingBanner} />
            <TrendingCards data={trending} />
            <PopularCards data={popular} />
            <PlayingCards data={playing} />
            <ShowCards data={shows} />
            <Footer />
        </div>
    ) : (
        // <h1 className="text-4xl font-bold text-zinc-100">Loading</h1>
        <Loader />
    );
};

export default Home;
