"use client";

import React, { useEffect, useRef } from "react";

export default function ModelViewer() {
  const modelViewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadModelViewer = async () => {
      try {
        await import("@google/model-viewer");

        if (modelViewerRef.current) {
          const modelViewer = document.createElement("model-viewer");
          modelViewer.setAttribute("src", "/models/beating_heart.glb");
          modelViewer.setAttribute("alt", "3D Model");
          modelViewer.setAttribute("camera-controls", "");
          modelViewer.setAttribute("auto-rotate", " ");
          modelViewer.setAttribute("shadow-intensity", "1");
          modelViewer.setAttribute("autoplay", "");
          modelViewer.setAttribute("loading", "eager");
          const isMobile = window.innerWidth <= 768;
          const size = isMobile ? "370px" : "500px";
          modelViewer.style.width = size;
          modelViewer.style.height = size;

          modelViewerRef.current.innerHTML = "";
          modelViewerRef.current.appendChild(modelViewer);

          modelViewer.addEventListener("load", () => {
            const availableAnimations = modelViewer.availableAnimations;
            if (availableAnimations && availableAnimations.length > 0) {
              modelViewer.animationName = availableAnimations[0];
            }
          });
        }
      } catch (error) {
        console.error("Error loading model-viewer:", error);
      }
    };

    loadModelViewer();
  }, []);

  return <div ref={modelViewerRef} className="w-[100%] h-[100%]" />;
}
