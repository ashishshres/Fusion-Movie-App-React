import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import axios from "../utils/Axios";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Show = () => {
    document.title = "Fusion | TV Shows";

    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [show, setShow] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getShow = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            if (data.results.length > 0) {
                setShow((prev) => [...prev, ...data.results]);
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
        if (show.length === 0) {
            getShow();
        } else {
            setPage(1);
            setShow([]);
            getShow();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return show.length > 0 ? (
        <div className="w-full h-full ">
            <Navbar />
            <div className="w-full p-8 flex justify-between items-center ">
                <h1 className="text-zinc-200 font-bold text-2xl">
                    <i
                        onClick={() => navigate("/")}
                        className="ri-arrow-left-line text-zinc-300 text-2xl mr-3 cursor-pointer"
                    ></i>
                    <span>TV Shows</span>
                </h1>
                <div className="flex gap-2">
                    <Dropdown
                        title={"Category"}
                        options={[
                            "On_The_Air",
                            "Popular",
                            "Top_Rated",
                            "Airing_Today",
                        ]}
                        func={setCategory}
                    />
                </div>
            </div>

            <InfiniteScroll
                dataLength={show.length}
                next={getShow}
                hasMore={hasMore}
            >
                <Cards data={show} title="tv" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
};

export default Show;
