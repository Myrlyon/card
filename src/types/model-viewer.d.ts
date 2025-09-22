import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          "camera-controls"?: boolean;
          "auto-rotate"?: boolean;
          "shadow-intensity"?: string;
          "environment-image"?: string;
          "skybox-image"?: string;
          poster?: string;
          reveal?: "auto" | "interaction" | "manual";
          loading?: "auto" | "lazy" | "eager";
          ar?: boolean;
          "ar-modes"?: string;
          "ios-src"?: string;
          "quick-look-browsers"?: string;
          scale?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          "min-field-of-view"?: string;
          "max-field-of-view"?: string;
          "interpolation-decay"?: string;
          "camera-target"?: string;
          "camera-orbit"?: string;
          "field-of-view"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
