import React from "react";

const Header = ({ data }) => {
    return (
        <div
            className="w-full h-[500px]"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(
            https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.profile_path
            }
        )`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        ></div>
    );
};

export default Header;
