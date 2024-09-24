import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import axios from "../utils/Axios";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
    document.title = "Fusion | Movies";

    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if (data.results.length > 0) {
                setMovie((prev) => [...prev, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const refreshHandler = () => {
        if (movie.length === 0) {
            getMovie();
        } else {
            setPage(1);
            setMovie([]);
            getMovie();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return movie.length > 0 ? (
        <div className="w-full h-full ">
            <Navbar />
            <div className="w-full p-8 flex justify-between items-center ">
                <h1 className="text-zinc-200 font-bold text-2xl">
                    <i
                        onClick={() => navigate("/")}
                        className="ri-arrow-left-line text-zinc-300 text-2xl mr-3 cursor-pointer"
                    ></i>
                    <span>Movies</span>
                </h1>
                <div className="flex gap-2">
                    <Dropdown
                        title={"Category"}
                        options={[
                            "Popular",
                            "Top_Rated",
                            "Upcoming",
                            "Now_Playing",
                        ]}
                        func={setCategory}
                    />
                </div>
            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={getMovie}
                hasMore={hasMore}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
};

export default Movie;
