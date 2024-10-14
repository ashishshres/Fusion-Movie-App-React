import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../app/actions/movieAction";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import CarouselCard from "../components/CarouselCard";
import Footer from "../components/Footer";
import noimage from "../../public/no-image.jpg";

const MovieDetail = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    const { info } = useSelector((state) => state.movie);
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
                <h1 className="absolute top-0 left-0 p-4 sm:p-8 z-50">
                    <i
                        onClick={() => navigate(-1)}
                        className="ri-arrow-left-line text-zinc-300 text-xl sm:text-2xl mr-3 cursor-pointer"
                    ></i>
                </h1>

                {/* Make the height fluid and responsive */}
                <div className="w-full min-h-[70vh] sm:min-h-[75vh] justify-end items-start flex flex-col p-4 sm:p-8 gap-3 relative overflow-hidden">
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

                    {/* Make flex-col for small screens, and flex-row for larger ones */}
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-end text-center md:text-left">
                        <img
                            className="w-44 h-[260px] sm:w-64 sm:h-[360px] object-cover rounded-md shadow-lg border-2 border-zinc-600"
                            src={
                                info.details.poster_path ||
                                info.details.backdrop_path
                                    ? `https://image.tmdb.org/t/p/original/${
                                          info.details.poster_path ||
                                          info.details.backdrop_path
                                      }`
                                    : noimage
                            }
                            alt="Movie Poster"
                        />

                        <div>
                            <div className="flex flex-col gap-2 items-center md:items-start">
                                <div>
                                    {/* Text size should adjust for small screens */}
                                    <h1 className="text-2xl sm:text-4xl font-black text-zinc-200">
                                        {info.details.name ||
                                            info.details.title ||
                                            info.details.original_name ||
                                            info.details.original_title}
                                    </h1>
                                    <h2 className="text-sm sm:text-base text-zinc-400 font-bold">
                                        {info.details.tagline}
                                    </h2>
                                </div>

                                {/* Responsive flex layout */}
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
                                    <span className="inline-block text-zinc-200 text-xs sm:text-sm">
                                        {info.details.genres
                                            .map((genre) => genre.name)
                                            .join(", ")}
                                    </span>
                                    <span className="inline-block text-zinc-300 font-medium text-xs sm:text-sm">
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
                                    <p className="text-zinc-400 text-sm sm:text-base leading-5">
                                        {info.details.overview}
                                    </p>
                                </div>

                                <div className="mt-1">
                                    <h2 className="text-zinc-200 font-medium">
                                        Available In
                                    </h2>
                                    <p className="text-zinc-400 text-xs sm:text-sm leading-5">
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
                                    className="bg-[#178cbe] px-3 sm:px-4 py-2 rounded-md flex gap-2 items-center justify-center text-zinc-200 font-medium w-max mt-2 sm:mt-1"
                                >
                                    <i className="ri-clapperboard-fill "></i>
                                    <span>Watch Trailer</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {info.recommendations.length > 0 ? (
                <CarouselCard
                    data={info.recommendations}
                    title="Recommendations"
                    path="movie"
                />
            ) : (
                <CarouselCard
                    data={info.similar}
                    title="Recommendations"
                    path="movie"
                />
            )}

            <Outlet />
            <Footer />
        </div>
    ) : (
        <Loader />
    );
};

export default MovieDetail;
