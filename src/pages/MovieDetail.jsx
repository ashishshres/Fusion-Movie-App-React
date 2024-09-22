import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../app/actions/movieAction";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const MovieDetail = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    const { info } = useSelector((state) => state.movie);
    console.log(info);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(asyncLoadMovie(id));
        return () => {
            dispatch(removeMovie(id));
        };
    }, [id]);

    return info ? (
        <div>
            <Navbar />
            <div className="w-full h-full relative">
                <h1 className="p-8 absolute top-0 left-0 z-10">
                    <i
                        onClick={() => navigate(-1)}
                        className="ri-arrow-left-line text-zinc-300 text-2xl mr-3 cursor-pointer"
                    ></i>
                </h1>
                <div className="w-full h-[75vh] justify-end items-start flex flex-col p-8 gap-3 relative overflow-hidden">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
                            backgroundPosition: "top",
                            backgroundSize: "cover",
                            filter: "blur(5px)",
                            zIndex: 1,
                        }}
                    ></div>

                    <div className="relative z-10 flex gap-6 items-end">
                        <img
                            className="w-64 h-[360px] object-cover rounded-md shadow-lg border-2 border-zinc-600"
                            src={`https://image.tmdb.org/t/p/original/${
                                info.details.poster_path ||
                                info.details.backdrop_path
                            }`}
                            alt=""
                        />
                        <div>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h1 className="text-4xl font-black text-zinc-200">
                                        {info.details.name ||
                                            info.details.title ||
                                            info.details.original_name ||
                                            info.details.original_title}
                                    </h1>
                                    <h2 className="text-zinc-400 font-bold">
                                        {info.details.tagline}
                                    </h2>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <span className="inline-block text-zinc-200 text-sm">
                                        {info.details.genres
                                            .map((genre) => genre.name)
                                            .join(", ")}
                                    </span>
                                    <span className="inline-block text-zinc-300 font-medium text-sm">
                                        {info.details.runtime} mins
                                    </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <h2 className="font-bold text-zinc-200 text-lg">
                                        {
                                            info.details.release_date.split(
                                                "-"
                                            )[0]
                                        }
                                    </h2>
                                    {info.details.vote_average && (
                                        <div className="flex gap-1 items-center">
                                            <i className="ri-star-s-fill text-orange-400 text-lg"></i>
                                            <h2 className="text-zinc-200 font-medium text-lg">
                                                {(
                                                    info.details.vote_average *
                                                    10
                                                ).toFixed()}
                                            </h2>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-1">
                                    <h2 className="text-zinc-200 font-medium">
                                        Overview
                                    </h2>
                                    <p className="text-zinc-400 leading-5">
                                        {info.details.overview}
                                    </p>
                                </div>
                                <div className="mt-1">
                                    <h2 className="text-zinc-200 font-medium">
                                        Available In
                                    </h2>
                                    <p className="text-zinc-400 leading-5 text-sm">
                                        {info.translations
                                            .map(
                                                (translation) =>
                                                    translation.english_name
                                            )
                                            .join(", ")}
                                    </p>
                                </div>
                                <Link
                                    to={`${pathname}/trailer`}
                                    className="bg-[#178cbe] px-4 py-2 rounded-md flex gap-2 items-center justify-center text-zinc-200 font-medium w-max mt-1"
                                >
                                    <i className="ri-clapperboard-fill "></i>
                                    <span>Watch Trailer</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-8 overflow-hidden">
                <h1 className="text-zinc-200 font-bold text-2xl mb-4">
                    Recommendations
                </h1>
                <div className="w-full h-72 flex overflow-x-auto gap-3 scrollbar-hide">
                    {info.recommendations.length > 0
                        ? info.recommendations.map((recommendation) => (
                              <Card
                                  key={recommendation.id}
                                  data={recommendation}
                              />
                          ))
                        : info.similar.map((similar) => (
                              <Card key={similar.id} data={similar} />
                          ))}
                    <Link
                        to={"/tv"}
                        className="text-zinc-100 rounded-md text-xl font-medium h-full min-w-56 p-4 flex gap-2 items-center justify-center hover:scale-[.98] duration-200"
                        style={{
                            background: `linear-gradient(
                                    rgba(23, 140, 190, 0.4),
                                    rgba(23, 140, 190, 0.6),
                                    rgba(23, 140, 190, 0.8)
                                    )`,
                        }}
                    >
                        <i className="ri-compass-fill text-3xl"></i>
                        <h1>Discover More</h1>
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    ) : (
        <Loader />
    );
};

export default MovieDetail;
