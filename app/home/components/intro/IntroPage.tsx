"use client";
import { useEffect, useRef } from "react";

import DecryptedText from "./DecryptedText";
import RotatingText from "./RotatingText";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BackgroundIntro from "./BackgroundIntro";

// Daftarkan plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IntroPage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          scale: 0.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%", // mulai animasi saat elemen 80% terlihat di viewport
            toggleActions: "play none none reverse", // animasi balik saat scroll ke atas
          },
        },
      );
    }
  }, []);
  return (
    <div className="relative w-full h-screen pl-6 md:pl-24 lg:pl-34 xl:pl-44">
      <div className="w-full h-full inset-0 z-0 absolute ">
        <BackgroundIntro />
      </div>

      <div className="w-full h-full z-10 absolute ">
        <div className="w-full h-screen flex items-center">
          <div className="flex flex-col">
            <div style={{ marginTop: "2rem" }}>
              <DecryptedText
                text="AKBAR DERMAWAN MAHBUBILLAH"
                animateOn="view"
                revealDirection="center"
                className="text-lg md:text-2xl text-gray-300 font-bold"
                encryptedClassName="text-lg md:text-2xl text-gray-300"
                parentClassName="tracking-wider"
              />
            </div>

            <div ref={textRef}>
              <p className="text-4xl md:text-6xl xl:text-8xl text-white">
                Web Developer
              </p>
              <h2 className="text-gray-600">
                <RotatingText
                  texts={["+ Full Stact", "+ Backend ", "+ Frontend"]}
                  mainClassName="text-2xl md:text-4xl xl:text-6xl px-2 sm:px-2 md:px-3 text-sky-400 overflow-hidden   rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
