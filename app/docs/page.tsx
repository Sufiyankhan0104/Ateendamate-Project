'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, CheckCircle, BarChart, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const docSections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Set up your account and onboard your first team members",
    topics: ["Account setup", "Team creation", "Mobile app installation", "First check-in"],
    status: "Available",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "User Roles & Permissions",
    description: "Understand different user types and their capabilities",
    topics: ["Thekedar permissions", "Worker access", "Admin controls", "Project assignments"],
    status: "Available",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Clock,
    title: "Attendance Types & Workflows",
    description: "Master all attendance combinations and approval processes",
    topics: ["Custom combinations", "Half/Full day setups", "Approval workflows", "Bulk operations"],
    status: "Available",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: CheckCircle,
    title: "Approval Management",
    description: "Streamline your daily and weekly approval processes",
    topics: ["Review queues", "Location verification", "Batch approvals", "Rejection handling"],
    status: "Available",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: BarChart,
    title: "Reports & Analytics",
    description: "Generate insights and export data for payroll processing",
    topics: ["Monthly reports", "Export formats", "Custom filters", "Analytics dashboard"],
    status: "Available",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: ExternalLink,
    title: "API Documentation",
    description: "Integrate Ateendamate with your existing systems",
    topics: ["REST API", "Webhooks", "Authentication", "Rate limits"],
    status: "Coming Soon",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const quickStartSteps = [
  {
    step: "1",
    title: "Create Account",
    description: "Sign up and set up your organization profile",
  },
  {
    step: "2", 
    title: "Add Team Members",
    description: "Invite thekedars and workers to your workspace",
  },
  {
    step: "3",
    title: "Configure Projects",
    description: "Set up your projects and attendance requirements",
  },
  {
    step: "4",
    title: "Start Tracking",
    description: "Workers can begin checking in with the mobile app",
  },
];

export default function DocsPage() {
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
              Documentation &{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                Guides
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to master Ateendamate and transform 
              your attendance management workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact-us">
                  Book a Walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">
                  Admin Panel
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-muted-foreground">
              Get up and running with Ateendamate in under 30 minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < quickStartSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24 bg-gradient-to-r from-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Documentation Sections
            </h2>
            <p className="text-xl text-muted-foreground">
              Detailed guides for every aspect of Ateendamate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${section.bgColor} flex items-center justify-center`}>
                        <section.icon className={`h-6 w-6 ${section.color}`} />
                      </div>
                      <Badge variant={section.status === "Available" ? "default" : "secondary"}>
                        {section.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {section.topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-current" />
                          {topic}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      disabled={section.status !== "Available"}
                      asChild={section.status === "Available"}
                    >
                      {section.status === "Available" ? (
                        <Link href="/contact-us">
                          Read Documentation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      ) : (
                        <>Coming Soon</>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-muted-foreground">
              Most searched help topics by our users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: "Attendance Management",
                topics: [
                  "How to set up custom attendance types",
                  "Managing complex day combinations",
                  "Bulk attendance approvals",
                  "Location verification setup"
                ]
              },
              {
                category: "User Management",
                topics: [
                  "Adding workers and thekedars",
                  "Setting up project assignments", 
                  "Managing permissions and roles",
                  "Mobile app installation guide"
                ]
              },
              {
                category: "Reports & Analytics",
                topics: [
                  "Generating monthly attendance reports",
                  "Exporting data for payroll",
                  "Understanding analytics dashboard",
                  "Custom report filters"
                ]
              },
              {
                category: "Troubleshooting",
                topics: [
                  "GPS location not working",
                  "Offline sync issues",
                  "Login problems",
                  "Data export troubleshooting"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.topics.map((topic) => (
                        <Link
                          key={topic}
                          href="/contact-us"
                          className="block text-sm text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-3 py-1"
                        >
                          {topic}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-gradient-to-r from-brand/5 via-accent/5 to-warm/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Personal Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? Our team is here to help you 
              get the most out of Ateendamate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact-us">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact-us">
                  Schedule Training
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}