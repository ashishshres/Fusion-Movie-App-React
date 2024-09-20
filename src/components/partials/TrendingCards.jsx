import React from "react";
import { Link } from "react-router-dom";

const TrendingCards = ({ data }) => {
    return (
        <div className="w-full p-8 overflow-hidden">
            <h1 className="text-zinc-200 font-bold text-2xl mb-4">Trending</h1>
            <div className="w-full h-72 flex overflow-x-auto gap-3 scrollbar-hide">
                {data.map((trending) => (
                    <Link
                        style={{
                            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(
                    https://image.tmdb.org/t/p/original/${
                        trending.backdrop_path || trending.profile_path
                    }
                )`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        key={trending.id}
                        className="min-w-56 p-4 rounded-md flex flex-col justify-end gap-1 shadow-md hover:scale-[.98] duration-200"
                    >
                        <h1 className="text-xl font-bold text-zinc-200">
                            {trending.original_title ||
                                trending.name ||
                                trending.original_name ||
                                trending.title}
                        </h1>
                        <p className="text-zinc-400 font-medium leading-5 text-sm">
                            {trending.overview.slice(0, 45)}...{" "}
                            <Link className="text-[#178cbe] text-sm font-medium">
                                more
                            </Link>
                        </p>
                    </Link>
                ))}{" "}
                <Link
                    to={"/trending"}
                    className="text-zinc-100 rounded-md text-xl font-medium h-full min-w-56 p-4 flex gap-2 items-center justify-center hover:scale-[.98] duration-200"
                    style={{
                        background: `linear-gradient(
                                    rgba(23, 140, 190, 0.4),
                                    rgba(23, 140, 190, 0.6),
                                    rgba(23, 140, 190, 0.8)
                                    )`,
                    }}
                >
                    <i class="ri-compass-fill text-3xl"></i>
                    <h1>Discover More</h1>
                </Link>
            </div>
        </div>
    );
};

export default TrendingCards;
