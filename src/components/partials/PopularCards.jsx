import React from "react";
import { Link } from "react-router-dom";

const PopularCards = ({ data }) => {
    return (
        <div className="w-full p-8 overflow-hidden">
            <h1 className="text-zinc-200 font-bold text-2xl mb-4">Popular</h1>
            <div className="w-full h-72 flex overflow-x-auto gap-3 scrollbar-hide">
                {data.map((popular) => (
                    <div
                        style={{
                            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(
                    https://image.tmdb.org/t/p/original/${
                        popular.backdrop_path || popular.profile_path
                    }
                )`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        key={popular.id}
                        className="min-w-56 p-4 rounded-md flex flex-col justify-end gap-1 shadow-md"
                    >
                        <h1 className="text-xl font-bold text-zinc-200">
                            {popular.original_title ||
                                popular.name ||
                                popular.original_name ||
                                popular.title}
                        </h1>
                        <p className="text-zinc-400 font-medium leading-5 text-sm">
                            {popular.overview.slice(0, 45)}...{" "}
                            <Link className="text-[#178cbe] text-sm font-medium">
                                more
                            </Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCards;
