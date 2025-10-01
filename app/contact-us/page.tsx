'use client';

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { generateSEO } from "@/lib/seo";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@ateendamate.com",
    description: "For general inquiries and support",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 9876543210",
    description: "Monday to Friday, 9 AM to 6 PM IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Mumbai, Maharashtra, India",
    description: "Our headquarters",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Within 24 hours",
    description: "We'll get back to you quickly",
  },
];

export default function ContactUsPage() {
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
              Let's{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about Ateendamate? Want to book a demo? 
              We're here to help you transform your attendance management.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're ready to book a demo, have questions about our features, 
                  or need help with your current attendance management challenges, 
                  we're here to help.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-accent" />
                          </div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold mb-1">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-[16/9] bg-gradient-to-br from-accent/20 to-warm/20 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-2 text-muted-foreground">
                        <MapPin className="h-12 w-12 mx-auto" />
                        <p className="font-medium">Office Location</p>
                        <p className="text-sm">Interactive map coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Quick Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions we hear from teams like yours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How quickly can we get started?",
                answer: "Most teams are up and running within 24-48 hours after booking a demo. We handle the setup and provide training."
              },
              {
                question: "Do you support offline attendance?",
                answer: "Yes! Workers can check in/out even without internet. Data syncs automatically when connection is restored."
              },
              {
                question: "Can we customize attendance types?",
                answer: "Absolutely. We support all standard types plus custom combinations like Full Day + Half Day for contractor workflows."
              },
              {
                question: "What about data security?",
                answer: "We use bank-level encryption and are GDPR compliant. Your data is stored securely with regular backups."
              },
              {
                question: "Is there mobile app support?",
                answer: "Yes, we have native mobile apps for both workers and thekedars with all core features available offline."
              },
              {
                question: "What's included in the free trial?",
                answer: "Full access to all features for 14 days with up to 50 workers. No credit card required to start."
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}