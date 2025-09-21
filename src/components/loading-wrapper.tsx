"use client";

import { useEffect, useState } from "react";
import LoadingPage from "./loading-page";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    console.log("Loading wrapper mounted, showing loading page"); // Debug log
    
    // Show loading for 2 seconds
    const timer = setTimeout(() => {
      console.log("2 seconds passed, hiding loading page"); // Debug log
      setShowLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      console.log("Loading wrapper unmounted"); // Debug log
    };
  }, []);

  if (showLoading) {
    console.log("Rendering loading page"); // Debug log
    return <LoadingPage />;
  }

  console.log("Rendering main content"); // Debug log
  return <>{children}</>;
}

export default LoadingWrapper;
