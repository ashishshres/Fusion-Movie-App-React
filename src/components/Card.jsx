import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no-image.jpg"; // Ensure this path is correct

const Card = ({ data }) => {
    const imageUrl =
        data.backdrop_path || data.profile_path
            ? `https://image.tmdb.org/t/p/original/${
                  data.backdrop_path || data.profile_path
              }`
            : noimage;

    return (
        <Link
            to={`/${data.media_type || "movie" || "tv"}/detail/${data.id}`}
            style={{
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${imageUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="min-w-56 p-4 rounded-md flex flex-col justify-end gap-1 shadow-md hover:scale-[.98] duration-200"
        >
            <h1 className="text-xl font-bold text-zinc-200">
                {data.original_title ||
                    data.name ||
                    data.original_name ||
                    data.title}
            </h1>
            <p className="text-zinc-400 font-medium leading-5 text-sm">
                {data.overview?.slice(0, 45)}...{" "}
                <Link className="text-[#178cbe] text-sm font-medium">more</Link>
            </p>
            {data.vote_average && (
                <div className="flex gap-1">
                    <i className="ri-star-s-fill text-orange-400"></i>
                    <h2 className="text-zinc-400 font-medium">
                        {(data.vote_average * 10).toFixed()}
                    </h2>
                </div>
            )}
        </Link>
    );
};

export default Card;
