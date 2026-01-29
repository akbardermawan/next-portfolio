"use client";
import React from "react";
import { cn } from "../../../../common/lib/utils";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";

const ProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-1 mb-15 lg:mb-20  flex flex-col md:flex-row items-center md:items-center justify-center gap-6 px-4">
      <div className="w-full md:w-[45%] h-[320px] flex justify-center items-center">
        <div className="relative top-45">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center relative">
              <div className="w-[65%] xl:w-[55%] rounded-xl overflow-hidden mt-[-300px] group">
                <img
                  src="img/pf1.JPG"
                  alt="Lanyard Placeholder"
                  className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute z-10 -left-10 md:-left-18 xl:-left-24 bottom-26">
                <div className="rotate-270">
                  <p className="text-6xl md:text-7xl xl:text-8xl  text-white font-bold drop-shadow-lg ">
                    アクバル
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[55%] text-center md:text-left xl:pt-8 md:pr-2 mt-8 md:mt-1 ">
        <div>
          <TypeWriter text="Akbar Dermawan Mahbubillah" speed={80} pause={80} />
        </div>
        <div className="mt-2 md:mt-4 mx-auto px-1 zoom-in ">
          <p
            className="max-w-2xl mx-auto text-justify text-sky-300 
             indent-8 first-letter:text-2xl first-letter:font-bold first-letter:mr-1
             md:text-2xl md:first-letter:text-3xl md:pr-4"
          >
            I am a website developer with an educational background in
            Agricultural Engineering from the University of Jember, Indonesia.
            Although my career path slightly deviates from my academic
            background, I chose to focus on enhancing my programming skills,
            particularly in web development.
          </p>
          <div className="flex gap-4 ">
            <div className="flex mt-3">
              <a
                href="/files/CV_Akbar.pdf"
                download
                aria-label="Download Resume"
              >
                <motion.button
                  whileHover={{ backgroundColor: "#0ea5e9" }} // Tailwind sky-600
                  transition={{ duration: 0.3 }}
                  className="flex w-[160px] lg:w-[180px] h-[25px] lg:h-[30px] rounded-full pl-2 lg:pl-4 py-2 border-2 border-sky-500 justify-between items-center text-black hover:text-white"
                >
                  <span className="text-lg text-white ">Download CV</span>
                  <div className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] rounded-full bg-sky-400 flex justify-center items-center">
                    <FiDownload className="" />
                  </div>
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
