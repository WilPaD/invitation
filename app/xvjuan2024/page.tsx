"use client";
import { useState } from "react";
import BackgroundMusic from "@/app/components/BackgroundMusic";
import Location from "@/app/components/Location";
import { Button } from "keep-react";
import { Play, Pause } from "phosphor-react";

import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/lamp";

export default function Roberto() {
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
        <Button
          shape="circle"
          color="secondary"
          variant="outline"
          onClick={toggleMusic}
          style={{ position: "fixed", top: "10px", left: "10px", zIndex: 1000 }}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </Button>
      </div>
      <BackgroundMusic src="OutofSight.mp3" isPlaying={isPlaying} />
      <div className="w-full flex justify-center space-x-14">
        <div className="w-full flex flex-col gap-y-4">
          <p className="text-center">Lugar de Santa Misa</p>
          <Location location="https://maps.app.goo.gl/GBn2XjaqejV58VJu5" />
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <p className="text-center">Lugar de Recepción</p>
          <Location location="https://maps.app.goo.gl/AZYtiPSzDxr4PSSa9" />
        </div>
      </div>
    </main>
  );
}
