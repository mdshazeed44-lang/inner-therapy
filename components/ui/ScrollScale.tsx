"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollScale({
  children, from = 1.15, to = 1, className,
}: {
  children: React.ReactNode; from?: number; to?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [from, to]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale }} className="h-full w-full">{children}</motion.div>
    </div>
  );
}
