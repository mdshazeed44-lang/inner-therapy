"use client";
import { motion } from "framer-motion";
import { EASE } from "@/lib/anim";

type Dir = "up" | "down" | "left" | "right" | "none";
const offset: Record<Dir, { x?: number; y?: number }> = {
  up: { y: 28 }, down: { y: -28 }, left: { x: 28 }, right: { x: -28 }, none: {},
};

export function Reveal({
  children, delay = 0, dir = "up", className,
}: {
  children: React.ReactNode; delay?: number; dir?: Dir; className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", ...offset[dir] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
