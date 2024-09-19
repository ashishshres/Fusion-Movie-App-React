import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
    return (
        <div className="w-full bg-zinc-800 text-white shadow-sm px-8 py-5 flex justify-between items-center">
            <h1 className="flex items-center gap-2 text-3xl font-bold">
                <i className="ri-movie-2-fill text-3xl text-[#1DB2F4]"></i>
                <span>Fusion.</span>
            </h1>
            <nav className="flex gap-3 text-lg font-semibold text-zinc-300">
                <Link className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2">
                    <i className="ri-fire-fill"></i>
                    <span>Trending</span>
                </Link>
                <Link className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2">
                    <i className="ri-bard-fill"></i>
                    <span>Popular</span>
                </Link>
                <Link className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2">
                    <i className="ri-movie-fill"></i>
                    <span>Movies</span>
                </Link>
                <Link className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2">
                    <i className="ri-tv-fill"></i>
                    <span>TV Shows</span>
                </Link>
                <Link className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2">
                    <i className="ri-group-fill"></i>
                    <span>People</span>
                </Link>
            </nav>
            <Searchbar />
        </div>
    );
};

export default Navbar;
