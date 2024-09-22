import React from "react";
import notFound from "/not-found.gif";

const NotFound = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <img src={notFound} alt="" className="h-52" />
        </div>
    );
};

export default NotFound;
