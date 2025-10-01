'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { value: "10,000+", label: "Workers Tracked", suffix: "" },
  { value: "500+", label: "Thekedars", suffix: "" },
  { value: "50,000+", label: "Approvals/Month", suffix: "" },
  { value: "99.9%", label: "Uptime", suffix: "" },
];

function AnimatedNumber({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [current, setCurrent] = useState("0");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      // Simple animation for demo - in production you'd want proper number animation
      setTimeout(() => setCurrent(target), 500);
    }
  }, [inView, target]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {current}{suffix}
    </motion.span>
  );
}

export function StatsStrip() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand/5 via-accent/5 to-warm/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}