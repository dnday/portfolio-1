import React from "react";
import HeroPic from "../assets/self2.jpg"; // Assuming the image is stored here

const About = () => {
return (
    <>
        <div className="mt-10">
            <h1 className="font-serif flex justify-center items-center text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellowg to-pink-400 mb-4 sm:mb-0">
                I'm Marcel.
            </h1>
        </div>
        
        <div className="flex justify-center items-center">
            <div className="max-w-7xl flex flex-col mt-5 sm:flex-row items-center p-8">
                {/* Image container */}
                <div className="w-full sm:w-auto sm:mr-10 mb-5">
                    <div className="flex justify-center overflow-hiddenshadow-lg rounded-t-full">
                        <img
                        src={HeroPic}
                        alt="Picture of Developer"
                        className="object-cover rounded-t-full w-64 h-64 sm:w-64 sm:h-64 scale-100 transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
                        />
                    </div>
                </div>

                {/* Text container */}
                <div className="w-full">
                    <div className="text-left border-0 rounded-xl background-radient sm:text-left">
                        <p className="text-2xl text-yellowg mb-4 font-serif">
                            <span className="text-2xl sm:text-5xl text-greeny">
                                I'm a first-year Information Engineering student at Universitas
                                Gadjah Mada.
                            </span>
                            <br />
                            I have a passion for web development, cloud computing,
                            IoT, and data science.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default About;

