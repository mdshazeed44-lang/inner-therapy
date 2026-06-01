"use client";

import { motion } from "framer-motion";
import { programs } from "@/lib/content";
import { ProgramCard } from "@/components/ui/ProgramCard";

export function Programs() {
  return (
    <section className="bg-cream pb-28 pt-10 md:pb-32 md:pt-14">
      <div className="container-x">
        {/* Interactive cards */}
        <div className="grid grid-cols-2 items-center gap-5 md:flex md:h-[470px] md:flex-row md:items-center">
          {programs.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:flex-1"
            >
              <ProgramCard item={item} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
