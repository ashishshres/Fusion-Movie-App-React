import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-zinc-800/70 text-white shadow-sm px-8 py-5 flex justify-between items-center sticky top-0 left-0 backdrop-blur-xl flex-wrap lg:flex-nowrap z-[100]">
            <div className="flex justify-between items-center w-full lg:w-auto">
                <Link to="/">
                    <h1 className="flex items-center gap-2 text-3xl font-bold">
                        <i className="ri-movie-2-fill text-3xl text-[#1DB2F4]"></i>
                        <span>Fusion.</span>
                    </h1>
                </Link>
                <button
                    className="text-white text-3xl lg:hidden"
                    onClick={toggleMenu}
                >
                    <i
                        className={menuOpen ? "ri-close-fill" : "ri-menu-fill"}
                    ></i>
                </button>
            </div>
            <div className="hidden lg:block">
                <nav className="flex gap-2 text-lg font-semibold text-zinc-300">
                    <Link
                        to="/trending"
                        className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                    >
                        <i className="ri-fire-fill"></i>
                        <span>Trending</span>
                    </Link>
                    <Link
                        to="/popular"
                        className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                    >
                        <i className="ri-bard-fill"></i>
                        <span>Popular</span>
                    </Link>
                    <Link
                        to="/movie"
                        className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                    >
                        <i className="ri-movie-fill"></i>
                        <span>Movies</span>
                    </Link>
                    <Link
                        to="/tv"
                        className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                    >
                        <i className="ri-tv-fill"></i>
                        <span>TV Shows</span>
                    </Link>
                    <Link
                        to="/people"
                        className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                    >
                        <i className="ri-group-fill"></i>
                        <span>People</span>
                    </Link>
                </nav>
            </div>

            {/* Dropdown Menu for Mobile */}
            {menuOpen && (
                <div className="absolute top-16 right-8 bg-zinc-800 shadow-lg rounded-lg w-64 py-4 lg:hidden">
                    <nav className="flex flex-col gap-2 text-lg font-semibold text-zinc-300 px-4">
                        <Link
                            to="/trending"
                            className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                            onClick={toggleMenu}
                        >
                            <i className="ri-fire-fill"></i>
                            <span>Trending</span>
                        </Link>
                        <Link
                            to="/popular"
                            className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                            onClick={toggleMenu}
                        >
                            <i className="ri-bard-fill"></i>
                            <span>Popular</span>
                        </Link>
                        <Link
                            to="/movie"
                            className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                            onClick={toggleMenu}
                        >
                            <i className="ri-movie-fill"></i>
                            <span>Movies</span>
                        </Link>
                        <Link
                            to="/tv"
                            className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                            onClick={toggleMenu}
                        >
                            <i className="ri-tv-fill"></i>
                            <span>TV Shows</span>
                        </Link>
                        <Link
                            to="/people"
                            className="hover:text-[#1db2f4] hover:bg-zinc-700 px-3 py-2 rounded-md duration-300 flex gap-2"
                            onClick={toggleMenu}
                        >
                            <i className="ri-group-fill"></i>
                            <span>People</span>
                        </Link>
                        <div className="mt-4">
                            <Searchbar />
                        </div>
                    </nav>
                </div>
            )}

            {/* Searchbar for larger screens */}
            <div className="hidden lg:block">
                <Searchbar />
            </div>
        </div>
    );
};

export default Navbar;
