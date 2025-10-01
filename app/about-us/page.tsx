'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Shield, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "We build systems you can depend on, day in and day out.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "Clear pricing, honest communication, and no hidden surprises.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Every feature is designed with real user workflows in mind.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Target,
    title: "Data Privacy",
    description: "Your data is yours. We protect it with enterprise-grade security.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const timeline = [
  {
    year: "2023",
    title: "The Problem",
    description: "We noticed contractors struggling with complex attendance tracking and manual approval processes.",
  },
  {
    year: "2023",
    title: "Research Phase",
    description: "Spent months with thekedars and workers understanding their daily workflows and pain points.",
  },
  {
    year: "2024",
    title: "MVP Launch",
    description: "Built and launched the first version with core attendance tracking and approval features.",
  },
  {
    year: "2024",
    title: "Feature Expansion",
    description: "Added location tracking, advance payments, and complex attendance type combinations.",
  },
  {
    year: "2024",
    title: "Scale & Growth",
    description: "Now serving thousands of workers and hundreds of thekedars across India.",
  },
  {
    year: "2025",
    title: "What's Next",
    description: "Salary distribution, advanced analytics, and AI-powered insights coming soon.",
  },
];

const team = [
  {
    name: "Rahul Sharma",
    role: "Co-Founder & CEO",
    description: "Former construction industry professional who experienced attendance challenges firsthand.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Priya Patel",
    role: "Co-Founder & CTO",
    description: "Software architect with 10+ years building scalable systems for SMBs.",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Amit Kumar",
    role: "Head of Product",
    description: "UX expert focused on making complex workflows simple for everyday users.",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function AboutUsPage() {
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
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                Workforce Management
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We started Ateendamate because we saw contractors spending hours on paperwork 
              instead of focusing on their core business. Our mission is to simplify 
              attendance management for the real world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To eliminate the complexity of attendance management for contractor teams 
                while maintaining the flexibility they need for diverse work patterns.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that technology should adapt to how people work, not the other way around. 
                That's why we built Ateendamate with real contractor workflows at its core.
              </p>
              <div className="space-y-4">
                {[
                  "Simplify complex attendance tracking",
                  "Reduce administrative overhead",
                  "Improve accuracy and transparency",
                  "Enable better decision making"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-warm/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4 text-muted-foreground">
                  <div className="text-6xl">🎯</div>
                  <p className="font-medium">Mission-Driven Development</p>
                  <p className="text-sm">Every feature solves a real problem</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl ${value.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From identifying the problem to building the solution
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex items-center gap-8">
                    <div className="flex-shrink-0 w-20 text-right">
                      <Badge variant="outline" className="font-bold">
                        {item.year}
                      </Badge>
                    </div>
                    
                    <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full relative">
                      {index < timeline.length - 1 && (
                        <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-border transform -translate-x-1/2" />
                      )}
                    </div>
                    
                    <Card className="flex-1">
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-r from-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground">
              The people behind Ateendamate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-warm/20 flex items-center justify-center text-2xl">
                        👤
                      </div>
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="font-medium text-accent">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
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
              Ready to Join Our Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for passionate people who want to solve real problems 
              for contractor teams. Whether you're a potential user or want to join our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact-us">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}