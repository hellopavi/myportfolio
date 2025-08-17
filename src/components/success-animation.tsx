
"use client";

import React, { useState, useEffect } from 'react';
import type Lottie from 'react-lottie';
import animationData from './lottie/success.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export function SuccessAnimation() {
  const [LottiePlayer, setLottiePlayer] = useState<typeof Lottie | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    import('react-lottie').then((module) => {
      setLottiePlayer(() => module.default);
    });
  }, []);

  if (!isMounted || !LottiePlayer) {
    return <div style={{ width: 150, height: 150 }} />;
  }

  return (
    <LottiePlayer options={defaultOptions} height={150} width={150} />
  );
}
