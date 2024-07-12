"use client";
import { useState } from "react";
import Image from "next/image";
import BackgroundMusic from "./components/BackgroundMusic";
import Location from "./components/Location";

import { motion } from "framer-motion";
import { LampContainer } from "../app/components/lamp";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const toggleMusic = () => {
    setIsPlaying((prevState) => !prevState);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Te invito a mis <br /> XV
        </motion.h1>
      </LampContainer>

      <div>
        <button
          onClick={toggleMusic}
          style={{ position: "fixed", top: "10px", left: "10px", zIndex: 1000 }}
        >
          {isPlaying ? "Apagar Música" : "Encender Música"}
        </button>
      </div>
      <BackgroundMusic src="OutofSight.mp3" isPlaying={isPlaying} />
      <Location location="https://maps.app.goo.gl/AZYtiPSzDxr4PSSa9" />
    </main>
  );
}
