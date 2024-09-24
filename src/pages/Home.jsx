import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "../utils/Axios";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import CarouselCard from "../components/CarouselCard";

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
        <div className="w-full h-full overflow-hidden">
            <Navbar />
            <Header data={trendingBanner} />
            <CarouselCard data={trending} title="Trending" path="trending" />
            <CarouselCard data={popular} title="Popular" path="popular" />
            <CarouselCard data={playing} title="Now Playing" path="movie" />
            <CarouselCard data={shows} title="TV Shows" path="tv" />
            <Footer />
        </div>
    ) : (
        <Loader />
    );
};

export default Home;
