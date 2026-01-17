'use client';

import Link from "next/link";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { BRAND_CONFIG, NAVIGATION_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const footerSections = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/docs", label: "Documentation" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/contact-us", label: "Contact" },
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Service" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/docs", label: "Getting Started" },
      { href: "/docs", label: "API Reference" },
      { href: "/contact-us", label: "Support" },
      { href: "/contact-us", label: "Sales" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Image
                src="/images/Logo-image1.png"
                alt="Brand Logo"
                width={200}
                height={140}
                priority
                className="mt-3"
              />
            </motion.div>
          </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              {BRAND_CONFIG.description}
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@ateendamate.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div> */}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 {BRAND_CONFIG.name}. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/docs">
                Admin Panel
                <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/docs">
                Mobile App
                <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}