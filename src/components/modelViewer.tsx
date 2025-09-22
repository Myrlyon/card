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
          modelViewer.setAttribute("auto-rotate", " ");
          modelViewer.setAttribute("shadow-intensity", "1");
          modelViewer.setAttribute("autoplay", "");
          modelViewer.style.width = "500px";
          modelViewer.style.height = "500px";

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

  return <div ref={modelViewerRef} style={{ width: "100%", height: "100%" }} />;
}
