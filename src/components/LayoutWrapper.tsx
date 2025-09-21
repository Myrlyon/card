"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import ContentWrapper from "./ContentWrapper";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleMusicStarted = () => {
    setIsContentVisible(true);
  };

  return (
    <>
      <ContentWrapper isVisible={isContentVisible}>{children}</ContentWrapper>
      <AudioPlayer
        src="/audio/songs/勇敢的高乔人.mp3"
        volume={0.2}
        loop={true}
        onMusicStarted={handleMusicStarted}
      />
    </>
  );
}
