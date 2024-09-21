import React from "react";
import loader from "/loader.gif";

const Loader = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <img src={loader} alt="" className="h-52" />
        </div>
    );
};

export default Loader;
