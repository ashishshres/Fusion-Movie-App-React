import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/no-image.jpg";

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState([]);

    const getSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            console.log(data.results);
            setSearch(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSearches();
    }, [query]);

    return (
        <div className="relative flex justify-end items-center">
            <div className="w-64 border-b-2 border-zinc-400 min-w-48 duration-100 px-2">
                <label htmlFor="search">
                    <i className="text-zinc-200 ri-search-line text-xl"></i>
                </label>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="bg-transparent px-2 py-2 outline-none text-zinc-100 text-md"
                    autoComplete="off"
                />
                {query.length > 0 && (
                    <i
                        onClick={() => setQuery("")}
                        className="ri-close-line text-zinc-300 text-xl"
                    ></i>
                )}
            </div>
            <div className="min-w-96 max-h-72 bg-zinc-800/95 absolute top-[100%] text-white overflow-auto rounded backdrop-blur-xl z-50">
                {search.map((result) => (
                    <Link
                        key={result.id}
                        className="p-4 w-full flex justify-start items-center border-b-2 border-zinc-600 text-zinc-200 font-semibold hover:bg-zinc-700/50 hover:text-zinc-100 duration-100 gap-5"
                    >
                        <img
                            src={
                                result.backdrop_path || result.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${
                                          result.backdrop_path ||
                                          result.profile_path
                                      }`
                                    : noimage
                            }
                            alt=""
                            className="w-16 h-16 object-cover object-center rounded-md"
                        />
                        <h2>
                            {result.original_title ||
                                result.name ||
                                result.original_name ||
                                result.title}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Searchbar;
