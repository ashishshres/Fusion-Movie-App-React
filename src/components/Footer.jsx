import React from "react";

const Footer = () => {
    return (
        <div className="w-full p-8 text-zinc-200 flex items-center justify-center bg-zinc-900 flex-col gap-1">
            <h1 className="flex items-center gap-2 text-3xl font-bold">
                <i className="ri-movie-2-fill text-3xl text-[#1DB2F4]"></i>
                <span>Fusion.</span>
            </h1>
            <p className="font-semibold text-zinc-400">
                &copy;{new Date().getFullYear()}. Made with React with ❤️.
            </p>
        </div>
    );
};

export default Footer;
