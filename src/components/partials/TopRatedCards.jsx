import React from "react";
import { Link } from "react-router-dom";

const TopRatedCards = ({ data }) => {
    return (
        <div className="w-full p-8 overflow-hidden">
            <h1 className="text-zinc-200 font-bold text-2xl mb-4">TopRated</h1>
            <div className="w-full h-72 flex overflow-x-auto gap-3 scrollbar-hide">
                {data.map((topRated) => (
                    <Link
                        style={{
                            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(
                    https://image.tmdb.org/t/p/original/${
                        topRated.backdrop_path || topRated.profile_path
                    }
                )`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        key={topRated.id}
                        className="min-w-56 p-4 rounded-md flex flex-col justify-end gap-1 shadow-md hover:scale-[.98] duration-200"
                    >
                        <h1 className="text-xl font-bold text-zinc-200">
                            {topRated.original_title ||
                                topRated.name ||
                                topRated.original_name ||
                                topRated.title}
                        </h1>
                        <p className="text-zinc-400 font-medium leading-5 text-sm">
                            {topRated.overview.slice(0, 45)}...{" "}
                            <Link className="text-[#178cbe] text-sm font-medium">
                                more
                            </Link>
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopRatedCards;
