'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Clock, CheckCircle, Calculator } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Worker Registration",
    description: "Add workers to your team with role assignments and project details",
    details: ["Quick onboarding", "Role-based access", "Project assignments"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Clock,
    title: "Daily Check-in/out",
    description: "Workers use mobile app to check-in with GPS location and photo",
    details: ["GPS tracking", "Photo capture", "Attendance types", "Offline support"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: CheckCircle,
    title: "Thekedar Review",
    description: "Thekedars review, verify locations, and approve daily attendance",
    details: ["Location verification", "Bulk approvals", "Rejection handling", "Audit trails"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Calculator,
    title: "Month-end Processing",
    description: "Automated calculations with overtime, deductions, and advance adjustments",
    details: ["Auto calculations", "Payroll export", "Reports", "Reconciliation"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export function HowItWorks() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-background to-accent/5 py-12 md:py-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading - centered */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              Ateendamate
            </span>{" "}
            Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple workflow designed for real contractor teams. From check-in to payroll,
            everything happens seamlessly.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">

          {/* Desktop + Tablet horizontal layout (md and up) */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-6 lg:gap-8 xl:gap-10 items-center relative max-w-7xl mx-auto">

            {/* Connecting line - aligned to card vertical center */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 md:h-1 bg-gradient-to-r from-blue-500 via-green-500 via-amber-500 to-purple-500 opacity-40 -translate-y-1/2 pointer-events-none" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="relative flex flex-col items-center text-center z-10"
              >
                {/* Number circle */}
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${step.bgColor} border-2 border-background flex items-center justify-center mb-4 md:mb-6 shadow-sm z-20`}>
                  <span className={`font-bold text-base md:text-lg ${step.color}`}>{index + 1}</span>
                </div>

                {/* Card */}
                <Card className="w-full max-w-[280px] md:max-w-xs shadow-lg border border-border/40 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-5 md:p-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <step.icon className={`h-7 w-7 md:h-8 md:w-8 ${step.color}`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{step.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                      {step.details.map((detail) => (
                        <Badge key={detail} variant="secondary" className="text-xs md:text-sm px-2.5 py-0.5">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow – centered both vertically and horizontally between cards */}
                {/* {index < steps.length - 1 && (
                  <div 
                    className="absolute top-1/2 left-full z-30 hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                  >
                    <ArrowRight className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 text-muted-foreground/70" />
                  </div>
                )} */}
              </motion.div>
            ))}
          </div>

          {/* Mobile vertical layout (below md) */}
          <div className="md:hidden space-y-10 py-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
              >
                <Card className="border-l-4 border-l-transparent" style={{ borderLeftColor: step.color.replace('text-', 'border-') }}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full ${step.bgColor} flex items-center justify-center shrink-0`}>
                        <span className={`font-bold ${step.color}`}>{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <step.icon className={`h-5 w-5 ${step.color}`} />
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3 text-sm">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((detail) => (
                            <Badge key={detail} variant="secondary" className="text-xs">
                              {detail}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}