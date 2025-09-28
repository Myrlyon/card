"use client";

import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

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
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

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
      setIsFlipping(true);
      await audio.play();
      setIsPlaying(true);

      // Wait for flip animation to complete before hiding overlay
      setTimeout(() => {
        setShowFullScreenOverlay(false);
        setIsContentVisible(true);
        setIsFlipping(false);
      }, 600);

      onMusicStarted?.();
    } catch (err) {
      console.log("Audio play failed:", err);
      setIsFlipping(false);
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

      {showFullScreenOverlay && (
        <div
          onClick={handleFullScreenClick}
          className={`fixed inset-0 z-50 bg-[#0231fe] backdrop-blur-sm flex cursor-pointer transition-transform duration-600 transform-gpu ${
            isFlipping ? "animate-flip-out" : ""
          }`}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="text-white w-full py-4 flex flex-col justify-between">
            <Marquee
              speed={500}
              gradient={false}
              direction="right"
              autoFill
              className="uppercase font-bold italic text-4xl lg:text-8xl"
            >
              Business Card&nbsp;
            </Marquee>
            <div className="uppercase font-semibold text-center text-5xl lg:text-7xl animate-spin">
              CLICK!
            </div>
            <Marquee
              speed={500}
              gradient={false}
              autoFill
              className="uppercase font-bold italic text-4xl lg:text-8xl"
            >
              Business Card&nbsp;
            </Marquee>
          </div>
        </div>
      )}

      {isLoaded && isPlaying && !showFullScreenOverlay && (
        <button
          onClick={handlePlayClick}
          className="fixed top-4 right-4 z-40 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg"
          title="Pause music"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h-4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        </button>
      )}

      <style jsx>{`
        @keyframes flip-out {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-90deg);
          }
        }
        .animate-flip-out {
          animation: flip-out 0.6s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
