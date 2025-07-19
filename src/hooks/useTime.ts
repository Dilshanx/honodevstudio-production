"use client";

import { useState, useEffect } from "react";
import { getTimeOfDay, TimeOfDay } from "@/lib/time-utils";

export const useTime = () => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(getTimeOfDay());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set initial state right away
    const newTime = new Date();
    setCurrentTime(newTime);
    setTimeOfDay(getTimeOfDay());

    const interval = setInterval(() => {
      const newTime = new Date();
      setCurrentTime(newTime);
      setTimeOfDay(getTimeOfDay());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return { timeOfDay, currentTime };
};
