import { HeroSection } from "@/components/hero-section";
import { StatsStrip } from "@/components/stats-strip";
import { FeatureGrid } from "@/components/feature-grid";
import { HowItWorks } from "@/components/how-it-works";
import { ContactForm } from "@/components/contact-form";
import { generateSEO, generateJSONLD } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Custom Attendance & Thekedar Approvals",
  description: "Track check-in/out, location, approvals, month-end totals, and advance payments. Built for real-world contractor teams.",
  url: "/",
});

export default function HomePage() {
  const jsonLD = generateJSONLD();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      
      <HeroSection />
      <StatsStrip />
      <FeatureGrid />
      <HowItWorks />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of teams already using Ateendamate for smarter attendance management.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}