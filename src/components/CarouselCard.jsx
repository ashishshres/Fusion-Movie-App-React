import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const CarouselCard = ({ data, title, path }) => {
    return (
        <div className="w-full p-8 overflow-hidden">
            <h1 className="text-zinc-200 font-bold text-2xl mb-4">{title}</h1>
            <div className="w-full h-72 flex overflow-x-auto gap-3 scrollbar-hide">
                {data.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
                <Link
                    to={`/${path}`}
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
    );
};

export default CarouselCard;
