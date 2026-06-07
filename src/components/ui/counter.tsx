"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
  className?: string;
}

export function Counter({
  value,
  suffix = "",
  duration = 2,
  isInView,
  className,
}: CounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [display]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, value]);

  return (
    <motion.span className={className}>
      {displayValue}
      {suffix}
    </motion.span>
  );
}
