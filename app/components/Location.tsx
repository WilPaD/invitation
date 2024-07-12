/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "keep-react";
import Image from "next/image";

interface LocationProps {
  location: string;
}

const Location: React.FC<LocationProps> = ({ location }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-blue-500 mb-4">
        <Image
          src="/localizacion.png"
          alt="localizacion"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
      <Button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        onClick={() => window.open(location, "_blank")}
      >
        Abrir en Google Maps
      </Button>
    </div>
  );
};

export default Location;
