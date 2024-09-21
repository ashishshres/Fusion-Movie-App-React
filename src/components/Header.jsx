import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
    return (
        <div
            className="w-full h-[75vh] justify-end items-start flex flex-col p-8 gap-3"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(
            https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.profile_path
            }
        )`,
                backgroundPosition: "top",
                backgroundSize: "cover",
            }}
        >
            <h1 className="text-5xl font-black text-zinc-200">
                {data.original_title ||
                    data.name ||
                    data.original_name ||
                    data.title}
            </h1>
            <p className="text-zinc-400 font-medium">
                {data.overview.slice(0, 200)}... <Link>more</Link>
            </p>
            <p className="text-zinc-200 uppercase flex gap-4">
                <span className="flex gap-1">
                    <i className="ri-megaphone-fill"></i>
                    {data.release_date || "No Information"}
                </span>
                <span className="flex gap-1">
                    <i className="ri-play-circle-fill"></i>
                    {data.media_type}
                </span>
            </p>
            <Link className="bg-[#178cbe] px-4 py-2 rounded-md flex gap-2 items-center justify-center text-zinc-200 font-medium ">
                <i className="ri-clapperboard-fill "></i>
                <span>Watch Trailer</span>
            </Link>
        </div>
    );
};

export default Header;
