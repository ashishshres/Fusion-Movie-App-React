import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import axios from "../utils/Axios";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
    document.title = "Fusion | People";

    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPeople = async () => {
        try {
            const { data } = await axios.get(
                `/person/${category}?page=${page}`
            );
            if (data.results.length > 0) {
                setPeople((prev) => [...prev, ...data.results]);
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
        if (people.length === 0) {
            getPeople();
        } else {
            setPage(1);
            setPeople([]);
            getPeople();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return people.length > 0 ? (
        <div className="w-full h-full ">
            <Navbar />
            <div className="w-full p-8 flex justify-between items-center ">
                <h1 className="text-zinc-200 font-bold text-2xl">
                    <i
                        onClick={() => navigate("/")}
                        className="ri-arrow-left-line text-zinc-300 text-2xl mr-3 cursor-pointer"
                    ></i>
                    <span>People</span>
                </h1>
            </div>

            <InfiniteScroll
                dataLength={people.length}
                next={getPeople}
                hasMore={hasMore}
            >
                <Cards data={people} title="people" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    );
};

export default People;
