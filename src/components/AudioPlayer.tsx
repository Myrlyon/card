"use client";

import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
  loop?: boolean;
  volume?: number;
  onMusicStarted?: () => void;
}

export default function AudioPlayer({
  src,
  loop = true,
  volume = 0.3,
  onMusicStarted,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullScreenOverlay, setShowFullScreenOverlay] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [, setIsContentVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.volume = volume;
    audio.loop = loop;

    const tryAutoplay = async () => {
      try {
        setIsLoaded(true);
        await audio.play();
        setIsPlaying(true);
        setIsContentVisible(true);
        onMusicStarted?.();
      } catch (error) {
        console.log("Initial autoplay blocked:", error);

        setShowFullScreenOverlay(true);
      }
    };

    const handleCanPlayThrough = () => {
      tryAutoplay();
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setIsContentVisible(true);
    };
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [src, volume, loop, isMounted, onMusicStarted]);

  const handleFullScreenClick = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
      setShowFullScreenOverlay(false);
      setIsContentVisible(true);
      onMusicStarted?.();
    } catch (err) {
      console.log("Audio play failed:", err);
    }
  };

  const handlePlayClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  // Prevent SSR/hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source src={src} type="audio/mpeg" />
        <source src={src} type="audio/wav" />
        <source src={src} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Full-screen click overlay */}
      {showFullScreenOverlay && (
        <div
          onClick={handleFullScreenClick}
          className="fixed inset-0 z-50 bg-[#0231fe] backdrop-blur-sm flex items-center justify-center cursor-pointer transition-opacity duration-500"
        >
          <div className="text-center text-white space-y-6 p-8">
            <h2 className="text-3xl font-semibold">Press to show</h2>
          </div>
        </div>
      )}

      {/* Mini control button when playing */}
      {isLoaded && isPlaying && !showFullScreenOverlay && (
        <button
          onClick={handlePlayClick}
          className="fixed top-4 right-4 z-40 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg"
          title="Pause music"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        </button>
      )}
    </>
  );
}
