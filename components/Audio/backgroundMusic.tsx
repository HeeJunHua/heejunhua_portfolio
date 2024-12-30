import { useState, useEffect, useRef } from 'react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Automatically attempt to play the music after the page is loaded
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Failed to play audio:", err);
        });
      }
    };

    // Add event listener to start audio playback on user interaction
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    // Clean up event listeners
    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      loop
      muted={false}
      autoPlay={false}  // Leave autoPlay as false because the user interaction triggers it
      src="/bgm-relax.mp3"
    />
  );
};

export default BackgroundMusic;
