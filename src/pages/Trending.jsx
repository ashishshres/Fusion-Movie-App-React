import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import axios from "../utils/Axios";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
    document.title = "Fusion | Trending";
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(
                `/trending/${category}/${duration}?page=${page}`
            );
            if (data.results.length > 0) {
                setTrending((prev) => [...prev, ...data.results]);
                console.log(data);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const refreshHandler = () => {
        if (trending.length === 0) {
            getTrending();
        } else {
            setPage(1);
            setTrending([]);
            getTrending();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category, duration]);

    return trending.length > 0 ? (
        <div className="w-full h-full ">
            <Navbar />
            <div className="w-full p-8 flex justify-between items-center flex-wrap">
                <h1 className="text-zinc-200 font-bold text-2xl">
                    <i
                        onClick={() => navigate("/")}
                        className="ri-arrow-left-line text-zinc-300 text-2xl mr-3 cursor-pointer"
                    ></i>
                    <span>Trending</span>
                </h1>
                <div className="flex gap-2">
                    <Dropdown
                        title={"Category"}
                        options={["All", "TV", "Movie"]}
                        func={setCategory}
                    />
                    <Dropdown
                        title={"Duration"}
                        options={["Day", "Week"]}
                        func={setDuration}
                    />
                </div>
            </div>

            <InfiniteScroll
                dataLength={trending.length}
                next={getTrending}
                hasMore={hasMore}
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
};

export default Trending;
