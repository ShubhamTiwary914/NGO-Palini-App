"use client"
import { useEffect, useState } from "react";
import './../../app/globals.css'

export default function StyleLoader({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return <>{children}</>;
}