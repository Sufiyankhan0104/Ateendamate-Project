import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: "Learn how Ateendamate protects and handles your personal data with transparency and security.",
  url: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: January 2024
        </p>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information to provide better services to our users. The types of information we collect include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Account information (name, email, phone number)</li>
              <li>Attendance data and timestamps</li>
              <li>Location data for attendance verification</li>
              <li>Device information and usage patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Provide and maintain our attendance management services</li>
              <li>Process attendance records and generate reports</li>
              <li>Verify location-based check-ins for accuracy</li>
              <li>Communicate with you about your account and our services</li>
              <li>Improve and enhance our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>End-to-end encryption for all data transmission</li>
              <li>Regular security audits and updates</li>
              <li>Secure data centers with physical access controls</li>
              <li>Role-based access controls within our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Restrict processing of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@ateendamate.com<br />
              Phone: +91 9876543210<br />
              Address: Mumbai, Maharashtra, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}