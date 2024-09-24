import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPeople, removePeople } from "../app/actions/peopleAction";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import noimage from "../../public/no-image.jpg";

const PeopleDetail = () => {
    const { id } = useParams();
    const { info } = useSelector((state) => state.people);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(asyncLoadPeople(id));
        return () => {
            dispatch(removePeople(id));
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
                            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${info.details.profile_path})`,
                            backgroundPosition: "top",
                            backgroundSize: "cover",
                            filter: "blur(5px)",
                            zIndex: 1,
                        }}
                    ></div>

                    <div className="relative z-10 flex gap-6 items-end">
                        <img
                            className="w-64 h-[360px] object-cover rounded-md shadow-lg border-2 border-zinc-600"
                            src={
                                info.details.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${info.details.profile_path}`
                                    : noimage
                            }
                            alt=""
                        />
                        <div>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h1 className="text-4xl font-black text-zinc-200">
                                        {info.details.name}
                                    </h1>
                                    <h2 className="text-zinc-400 font-bold">
                                        {info.details.known_for_department}
                                    </h2>
                                </div>
                                {info.details.popularity && (
                                    <div className="flex gap-1 items-center">
                                        <i className="ri-star-s-fill text-orange-400 text-lg"></i>
                                        <h2 className="text-zinc-200 font-medium text-lg">
                                            {info.details.popularity.toFixed()}
                                        </h2>
                                    </div>
                                )}
                                <div>
                                    <h2 className="text-zinc-200 font-medium">
                                        From
                                    </h2>
                                    <p className="text-zinc-400 leading-5">
                                        {info.details.place_of_birth}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-zinc-200 font-medium">
                                        Gender
                                    </h2>
                                    <p className="text-zinc-400 leading-5">
                                        {info.details.gender == 1
                                            ? "Female"
                                            : "Male"}
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <Link
                                        target="_blank"
                                        to={`https://www.facebook.com/${info.externalIds.facebook_id}`}
                                        className="text-zinc-300 text-xl"
                                    >
                                        <i className="ri-facebook-circle-fill"></i>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        to={`https://www.instagram.com/${info.externalIds.instagram_id}`}
                                        className="text-zinc-300 text-xl"
                                    >
                                        <i className="ri-instagram-fill"></i>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        to={`https://www.twitter.com/${info.externalIds.twitter_id}`}
                                        className="text-zinc-300 text-xl"
                                    >
                                        <i className="ri-twitter-x-fill"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-8 overflow-hidden">
                <h1 className="text-zinc-200 font-bold text-2xl mb-4">
                    Known For
                </h1>
                <div className="w-full h-72 flex overflow-x-auto gap-3 scrollbar-hide">
                    {info.combinedCredits.cast.map((credit) => (
                        <Link
                            key={credit.id}
                            style={
                                credit.poster_path
                                    ? {
                                          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${credit.poster_path})`,
                                          backgroundPosition: "center",
                                          backgroundSize: "cover",
                                      }
                                    : {
                                          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${noimage})`,
                                          backgroundPosition: "center",
                                          backgroundSize: "cover",
                                      }
                            }
                            className="min-w-56 p-4 rounded-md flex flex-col justify-end gap-1 shadow-md hover:scale-[.98] duration-200"
                        >
                            <h1 className="text-xl font-bold text-zinc-200">
                                {credit.original_title ||
                                    credit.name ||
                                    credit.original_name ||
                                    credit.title}
                            </h1>

                            {credit.vote_average && (
                                <div className="flex gap-1">
                                    <i className="ri-star-s-fill text-orange-400"></i>
                                    <h2 className="text-zinc-400 font-medium">
                                        {(credit.vote_average * 10).toFixed()}
                                    </h2>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    ) : (
        <Loader />
    );
};

export default PeopleDetail;
