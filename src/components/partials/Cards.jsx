import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
    return (
        // <div className="flex gap-4 p-8 flex-wrap">
        <div className="p-8 grid grid-cols-5 gap-3">
            {data.map((trending) => (
                <Link
                    style={{
                        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(
                    https://image.tmdb.org/t/p/original/${
                        trending.poste_path || trending.backdrop_path
                    }
                )`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                    key={trending.id}
                    // className="max-w-[202px] h-72 p-4 rounded-md flex flex-col justify-end gap-1 shadow-md"
                    className="p-4 h-80 rounded-md flex flex-col justify-end gap-1 shadow-md hover:scale-[.98] duration-200"
                >
                    <h1 className="text-xl font-bold text-zinc-200">
                        {trending.original_title ||
                            trending.name ||
                            trending.original_name ||
                            trending.title}
                    </h1>
                    <p className="text-zinc-400 font-medium leading-5 text-sm">
                        {trending.overview.slice(0, 50)}...{" "}
                        <Link className="text-[#178cbe] text-sm font-medium">
                            more
                        </Link>
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default Cards;
