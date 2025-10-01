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
    <section className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              Ateendamate
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple workflow designed for real contractor teams. From check-in to payroll, 
            everything happens seamlessly.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-amber-500 to-purple-500 opacity-30" />
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Step Number */}
                    <div className={`w-12 h-12 rounded-full ${step.bgColor} border-2 border-background flex items-center justify-center mx-auto mb-6 relative z-10`}>
                      <span className={`font-bold ${step.color}`}>{index + 1}</span>
                    </div>

                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-4`}>
                          <step.icon className={`h-8 w-8 ${step.color}`} />
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        <div className="space-y-2">
                          {step.details.map((detail) => (
                            <Badge key={detail} variant="secondary" className="mr-1 mb-1">
                              {detail}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-24 -right-4 z-20">
                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <span className={`font-bold ${step.color}`}>{index + 1}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <step.icon className={`h-6 w-6 ${step.color} mr-3`} />
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        <div className="space-y-2">
                          {step.details.map((detail) => (
                            <Badge key={detail} variant="secondary" className="mr-2 mb-1">
                              {detail}
                            </Badge>
                          ))}
                        </div>
                      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    </div>
                  </CardContent>
                </Card>

                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-8 bg-gradient-to-b from-current to-transparent opacity-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}