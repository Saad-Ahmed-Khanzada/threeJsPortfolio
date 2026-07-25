"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

/*
  Wrapper for the decorative 3D scenes.

  Two layers of protection, because the models must never be able to take the
  page down with them:

    1. A capability check before mounting. If the browser cannot give us a
       WebGL context at all, we never construct the Canvas — cheaper and more
       reliable than catching the failure afterwards.
    2. An error boundary around the Canvas, for everything the pre-flight
       check cannot predict: context loss mid-session, driver crashes, a model
       file that fails to parse.

  Suspense alone was not enough here. Suspense catches thrown promises, not
  thrown errors, so a renderer failure propagated all the way up and blanked
  the whole page.
*/

// Cached across mounts — several pages render a model, and probing the GPU
// once per mount is wasteful.
let webglSupport = null;

const detectWebGL = () => {
  if (webglSupport !== null) return webglSupport;

  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    webglSupport = Boolean(context);
  } catch {
    webglSupport = false;
  }

  return webglSupport;
};

const RenderModel = ({ children, className, fallback = null }) => {
  // Resolved in an effect so server and first client render agree.
  const [supported, setSupported] = useState(null);

  useEffect(() => {
    setSupported(detectWebGL());
  }, []);

  if (supported === null || supported === false) return fallback;

  return (
    <ErrorBoundary fallback={fallback}>
      <Canvas className={clsx("relative -z-10 h-screen w-screen", className)}>
        <Suspense fallback={null}>{children}</Suspense>
        <Environment preset="dawn" />
      </Canvas>
    </ErrorBoundary>
  );
};

export default RenderModel;
