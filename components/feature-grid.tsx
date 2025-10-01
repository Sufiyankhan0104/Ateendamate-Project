'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, MapPin, Calculator, CreditCard, Users, Shield, Smartphone } from "lucide-react";
import { ATTENDANCE_TYPES } from "@/lib/constants";

const features = [
  {
    icon: Clock,
    title: "Custom Attendance Types",
    description: "Perfect for thekedar workflows with flexible combinations",
    details: ATTENDANCE_TYPES.slice(0, 4),
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Smartphone,
    title: "Daily Check-In / Check-Out",
    description: "One-tap attendance with automatic timestamps and GPS coordinates",
    details: ["GPS location capture", "Photo verification", "Offline mode", "Auto sync"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: CheckCircle,
    title: "Thekedar Approval Flow",
    description: "Review, verify, and approve attendance entries with full audit trails",
    details: ["Batch approvals", "Location verification", "Time validation", "Rejection reasons"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Calculator,
    title: "Monthly Calculations",
    description: "Automated totals, overtime, and deductions ready for payroll",
    details: ["Auto calculations", "Overtime rules", "Deduction handling", "Export reports"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description: "View attendance locations to prevent mismatches and ensure accuracy",
    details: ["GPS coordinates", "Geofencing", "Location history", "Map visualization"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: CreditCard,
    title: "Advance Payments",
    description: "Record, track, and reconcile advance payments seamlessly",
    details: ["Payment records", "Limit tracking", "Auto reconciliation", "Balance management"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Users,
    title: "Multi-Crew Management",
    description: "Perfect for thekedars managing multiple teams and projects",
    details: ["Team assignments", "Project separation", "Bulk operations", "Crew analytics"],
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with role-based access and audit logs",
    details: ["Data encryption", "Role permissions", "Audit trails", "GDPR compliance"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

export function FeatureGrid() {
  return (
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
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              Smart Attendance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From complex attendance combinations to automated payroll calculations, 
            we've built everything you need for real-world contractor workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-border/50 hover:border-border transition-colors group">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.details.map((detail) => (
                      <Badge key={detail} variant="secondary" className="mr-2 mb-1">
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}