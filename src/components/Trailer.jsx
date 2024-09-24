import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "show";
    const video = useSelector((state) => state[category].info.videos);
    const navigate = useNavigate();

    return (
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 z-50 bg-zinc-950/95">
            <h1 className="p-8 absolute top-0 right-0 z-10">
                <i
                    onClick={() => navigate(-1)}
                    className="ri-close-fill text-zinc-300 text-2xl mr-3 cursor-pointer"
                ></i>
            </h1>
            {video ? (
                <ReactPlayer
                    controls
                    height={500}
                    width={1000}
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                />
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Trailer;
