import React, { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  src: string;
  isPlaying: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ src, isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(error => {
        console.log('El usuario necesita interactuar con la página antes de reproducir el audio:', error);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} loop>
      <source src={src} type="audio/mp3" />
      Tu navegador no soporta el elemento de audio.
    </audio>
  );
};

export default BackgroundMusic;