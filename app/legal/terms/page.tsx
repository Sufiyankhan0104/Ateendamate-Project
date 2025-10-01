import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Terms of Service",
  description: "Read Ateendamate's terms of service to understand your rights and responsibilities when using our platform.",
  url: "/legal/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: January 2024
        </p>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using Ateendamate's services, you agree to be bound by these Terms of Service 
              and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Ateendamate provides attendance management software that enables organizations to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Track employee check-in and check-out times</li>
              <li>Manage complex attendance type combinations</li>
              <li>Enable supervisor approval workflows</li>
              <li>Generate attendance reports and analytics</li>
              <li>Handle advance payment records</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Not interfere with or disrupt the service</li>
              <li>Not attempt to access unauthorized areas of the platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Ownership</h2>
            <p className="mb-4">
              You retain ownership of all data you submit to our platform. We do not claim any ownership 
              rights over your attendance records, employee information, or other business data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
            <p className="mb-4">
              While we strive to maintain high availability, we cannot guarantee uninterrupted access to our services. 
              We may temporarily suspend service for maintenance, updates, or other operational reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
            <p className="mb-4">
              Paid subscriptions are billed in advance on a monthly or annual basis. You may cancel your subscription 
              at any time, but refunds are not provided for partial billing periods.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              Ateendamate shall not be liable for any indirect, incidental, special, or consequential damages 
              resulting from your use of our services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="mb-4">
              Either party may terminate this agreement at any time. Upon termination, your access to the service 
              will cease, and you may export your data for a period of 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="mb-4">
              We may update these terms from time to time. We will notify you of significant changes via email 
              or through the platform. Continued use of the service after changes constitutes acceptance of new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mb-4">
              Email: legal@ateendamate.com<br />
              Phone: +91 9876543210<br />
              Address: Mumbai, Maharashtra, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}