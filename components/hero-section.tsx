'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { BRAND_CONFIG, FEATURE_FLAGS } from "@/lib/constants";

const heroFeatures = [
  "Custom attendance types for complex workflows",
  "Location-verified check-in/out with GPS",
  "Thekedar approval system with audit trails",
  "Automated month-end calculations",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(26, 161, 242, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 176, 65, 0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {FEATURE_FLAGS.SALARY_DISTRIBUTION && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <Badge variant="secondary" className="inline-flex items-center gap-2">
                  🎉 Coming Soon: Salary Distribution
                </Badge>
              </motion.div>
            )}

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-brand via-foreground to-accent bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Custom Attendance,{" "}
              <span className="block">Zero Confusion.</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Track check-in/out, approve by thekedar, and close your month-end in minutes—with location logs and advance payments built-in.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button size="lg" asChild className="group">
                <Link href="/contact-us">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <Link href="/features">
                  <Play className="mr-2 h-4 w-4" />
                  Explore Features
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-warm/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4 text-muted-foreground">
                  <div className="w-16 h-16 mx-auto bg-accent/20 rounded-2xl flex items-center justify-center">
                    📱
                  </div>
                  <p className="font-medium">Dashboard Preview</p>
                  <p className="text-sm">Interactive demo coming soon</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 rounded-full p-2 shadow-lg"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <CheckCircle className="h-4 w-4 text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-2 shadow-lg"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              📍
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}