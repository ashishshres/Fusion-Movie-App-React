import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
    console.log(title);
    return (
        // <div className="flex gap-4 p-8 flex-wrap">
        <div className="p-8 grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-5">
            {data.map((item) => (
                <LazyLoad height={200} offset={100} key={item.id}>
                    <Link
                        to={`/${item.media_type || title}/detail/${item.id}`}
                        style={{
                            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(
                    https://image.tmdb.org/t/p/original/${
                        item.poster_path ||
                        item.backdrop_path ||
                        item.profile_path
                    } 
                )`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        // className="max-w-[202px] h-72 p-4 rounded-md flex flex-col justify-end gap-1 shadow-md"
                        className="p-4 h-80 rounded-md flex flex-col justify-end gap-1 shadow-md hover:scale-[.98] duration-200"
                    >
                        <h1 className="text-xl font-bold text-zinc-200">
                            {item.original_title ||
                                item.name ||
                                item.original_name ||
                                item.title}
                        </h1>
                        {item.vote_average && (
                            <div className="flex gap-1">
                                <i className="ri-star-s-fill text-orange-400"></i>
                                <h2 className="text-zinc-400 font-medium">
                                    {(item.vote_average * 10).toFixed()}
                                </h2>
                            </div>
                        )}
                    </Link>
                </LazyLoad>
            ))}
        </div>
    );
};

export default Cards;
