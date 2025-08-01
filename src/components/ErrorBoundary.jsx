"use client";
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="flex items-center justify-center h-screen text-muted">3D model failed to load</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;