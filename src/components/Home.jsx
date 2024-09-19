import React, { useEffect, useState } from "react";
import Navbar from "./partials/Navbar";
import Searchbar from "./partials/Searchbar";
import axios from "../utils/Axios";
import Header from "./partials/Header";

const Home = () => {
    document.title = "Fusion | Home";
    const [trendingBanner, setTrendingBanner] = useState(null);

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

    useEffect(() => {
        !trendingBanner && getTrendingBanner();
    }, []);

    return trendingBanner ? (
        <div className="w-full">
            <Navbar />
            {/* <Searchbar /> */}
            <Header data={trendingBanner} />
        </div>
    ) : (
        <h1>Loading</h1>
    );
};

export default Home;
