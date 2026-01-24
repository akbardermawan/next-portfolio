import React from "react";
import { motion } from "framer-motion";

const BackgroundIntro = () => {
  return (
    <div className="relative w-full h-screen   flex items-center justify-center overflow-hidden">
      {/* Teks utama */}
      {/* PC */}
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
        }}
        className="hidden md:flex xl:hidden relative z-10 text-6xl md:text-7xl xl:text-9xl 
             font-extrabold text-transparent bg-clip-text 
             bg-gradient-to-b from-gray-400/80 xl:from-gray-400/5 to-gray-800/10 
             drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] tracking-widest -right-85 "
      >
        アクバル
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden xl:flex relative z-10 text-6xl md:text-7xl xl:text-9xl 
             font-extrabold text-transparent bg-clip-text 
             bg-gradient-to-b from-gray-400/80 xl:from-gray-400/5 to-gray-800/10 
             drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] tracking-widest -bottom-70 "
      >
        アクバル
      </motion.h1>

      {/* Subteks opsional */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-24 text-gray-600/40 text-lg tracking-widest"
      >
        Welcome to My Portfolio
      </motion.p>
    </div>
  );
};

export default BackgroundIntro;
