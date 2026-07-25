"use client";
import React from "react";

/*
  Error boundary for the decorative 3D scenes.

  Without this, a WebGL failure took the whole page down: react-three-fiber
  throws while creating the renderer, the error propagates past the Suspense
  boundary (Suspense catches promises, not errors), React unmounts the entire
  tree, and Next.js renders "Application error: a client-side exception has
  occurred" over a blank white page.

  That is not a hypothetical. It reproduces on any client without WebGL —
  corporate laptops with GPU access disabled by enterprise policy, older
  hardware, some VM and remote-desktop sessions, hardened browsers, and
  headless screenshot bots. On this site the models are pure decoration, so
  losing them should cost nothing; losing the name, the experience, and the
  contact details costs everything.

  The fallback renders nothing by default. The pages layer the models behind
  their content, so silently omitting the canvas leaves a clean page rather
  than an apology for a missing decoration.
*/
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Surfaced for debugging without interrupting the visitor.
    if (typeof console !== "undefined") {
      console.warn("3D scene failed to render; continuing without it.", error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
