"use client";

import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lottie/success.json';

export function SuccessAnimation() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={150} width={150} />;
}
