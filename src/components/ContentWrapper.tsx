"use client";

import { useEffect, useState } from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
  isVisible: boolean;
}

export default function ContentWrapper({
  children,
  isVisible,
}: ContentWrapperProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Start fade-in after a short delay
      const timer = setTimeout(() => {
        setOpacity(1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setOpacity(0);
      // Remove from DOM after fade-out completes
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className="transition-opacity duration-1000 ease-in-out"
      style={{ opacity }}
    >
      {children}
    </div>
  );
}
