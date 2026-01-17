'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import featuresData from "@/data/features.json";
import { ATTENDANCE_TYPES } from "@/lib/constants";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("attendance");

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                Smart Attendance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive attendance management built for real contractor workflows. 
              From complex attendance types to automated payroll calculations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-12">
              {featuresData.tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="text-sm">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {featuresData.tabs.map((tab, index) => (
              <TabsContent key={tab.id} value={tab.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{tab.title}</h3>
                      <p className="text-xl text-muted-foreground">{tab.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      {tab.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {tab.id === "attendance" && (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Supported Attendance Types:</h4>
                        <div className="flex flex-wrap gap-2">
                          {ATTENDANCE_TYPES.map((type) => (
                            <Badge key={type} variant="secondary">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visual/Demo */}
                  <div className="relative">
                    <Card className="p-8 bg-gradient-to-br from-accent/10 to-warm/10">
                      <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                        <div className="text-center space-y-4 text-muted-foreground">
                          <div className="text-6xl">
                            {tab.id === "attendance" && "⏰"}
                            {tab.id === "approvals" && "✅"}
                            {tab.id === "month-end" && "📊"}
                            {tab.id === "location" && "📍"}
                            {tab.id === "advances" && "💰"}
                            {tab.id === "security" && "🛡️"}
                          </div>
                          <p className="font-medium">{tab.title}</p>
                          <p className="text-sm">Interactive demo coming soon</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* For Thekedar Section */}
      <section className="py-24 bg-gradient-to-r from-brand/5 via-accent/5 to-warm/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                Thekedars
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Managing multiple crews and complex attendance combinations? 
              We've got you covered with specialized features for thekedar workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Crew Oversight",
                description: "Manage multiple teams across different projects with ease",
                features: ["Team assignments", "Project separation", "Bulk operations"],
              },
              {
                title: "Complex Attendance Presets",
                description: "Pre-configured combinations for common contractor scenarios",
                features: ["Multi-day combos", "Half-day variations", "Custom presets"],
              },
              {
                title: "Approval Workflows",
                description: "Streamlined approval process with batch operations",
                features: ["Bulk approvals", "Review queues", "Audit trails"],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Attendance Management?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of teams already using Ateendamate for smarter workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact-us">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}