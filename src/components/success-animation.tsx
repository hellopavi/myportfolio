"use client";

import React, { useState, useEffect } from 'react';
import type Lottie from 'react-lottie';
import animationData from './lottie/success.json';

// Dynamically import Lottie to avoid SSR issues
const LottiePlayer = React.lazy(() => import('react-lottie'));

export function SuccessAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (!isClient) {
    // Render a placeholder or nothing on the server
    return <div style={{width: 150, height: 150}} />;
  }

  return (
    <React.Suspense fallback={<div style={{width: 150, height: 150}} />}>
      <LottiePlayer options={defaultOptions} height={150} width={150} />
    </React.Suspense>
  );
}
