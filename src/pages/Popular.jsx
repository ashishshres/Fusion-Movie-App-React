import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import axios from "../utils/Axios";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
    document.title = "Fusion | Popular";

    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPopular = async () => {
        try {
            const { data } = await axios.get(
                `/${category}/popular?page=${page}`
            );
            if (data.results.length > 0) {
                setPopular((prev) => [...prev, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const refreshHandler = () => {
        if (popular.length === 0) {
            getPopular();
        } else {
            setPage(1);
            setPopular([]);
            getPopular();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular.length > 0 ? (
        <div className="w-full h-full ">
            <Navbar />
            <div className="w-full p-8 flex justify-between items-center">
                <h1 className="text-zinc-200 font-bold text-2xl">
                    <i
                        onClick={() => navigate("/")}
                        className="ri-arrow-left-line text-zinc-300 text-2xl mr-3 cursor-pointer"
                    ></i>
                    <span>Popular</span>
                </h1>
                <div className="flex gap-2">
                    <Dropdown
                        title={"Category"}
                        options={["TV", "Movie"]}
                        func={setCategory}
                    />
                </div>
            </div>

            <InfiniteScroll
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
};

export default Popular;
