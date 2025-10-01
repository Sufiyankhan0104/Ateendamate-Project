import { generateSEO } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = generateSEO({
  title: "Changelog",
  description: "Stay updated with the latest features, improvements, and fixes in Ateendamate.",
  url: "/changelog",
});

const changelog = [
  {
    version: "2.1.0",
    date: "January 2024",
    type: "Feature",
    items: [
      "Added bulk approval functionality for thekedars",
      "Improved location accuracy with enhanced GPS tracking",
      "New analytics dashboard with custom date ranges",
      "Export attendance data in multiple formats (CSV, Excel, PDF)",
    ],
  },
  {
    version: "2.0.2",
    date: "December 2023",
    type: "Improvement",
    items: [
      "Enhanced mobile app performance",
      "Improved offline sync reliability",
      "Better error handling for network issues",
      "UI improvements for better accessibility",
    ],
  },
  {
    version: "2.0.1",
    date: "November 2023",
    type: "Bug Fix",
    items: [
      "Fixed issue with location not saving in offline mode",
      "Resolved timezone handling for multi-location teams",
      "Fixed attendance calculation edge cases",
      "Improved loading times for large datasets",
    ],
  },
  {
    version: "2.0.0",
    date: "October 2023",
    type: "Major Release",
    items: [
      "Complete UI redesign with modern interface",
      "Advanced attendance type combinations",
      "Enhanced thekedar approval workflows",
      "New reporting and analytics engine",
      "Improved mobile app with better offline support",
      "Added advance payment management",
    ],
  },
  {
    version: "1.5.0",
    date: "September 2023", 
    type: "Feature",
    items: [
      "Location-based attendance verification",
      "Custom attendance type configurations",
      "Batch operations for attendance management",
      "Enhanced mobile app with photo capture",
    ],
  },
];

const upcomingFeatures = [
  {
    title: "Salary Distribution",
    description: "Automated salary calculation and distribution with integration to payment gateways",
    status: "In Development",
    eta: "Q2 2024",
  },
  {
    title: "Advanced Analytics",
    description: "AI-powered insights and predictive analytics for workforce optimization",
    status: "Planning",
    eta: "Q3 2024",
  },
  {
    title: "API v2.0",
    description: "Enhanced REST API with webhook support and better integration capabilities",
    status: "Research",
    eta: "Q4 2024",
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What's{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                New
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest features, improvements, and fixes in Ateendamate. 
              We're constantly working to make your attendance management better.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground">
              Features we're working on for future releases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {upcomingFeatures.map((feature, index) => (
              <Card key={feature.title} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute transform rotate-45 bg-accent text-white text-xs font-bold py-1 px-4 top-4 right-[-20px]">
                    Soon
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary">{feature.status}</Badge>
                    <span className="text-muted-foreground">{feature.eta}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-24 bg-gradient-to-r from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Release History
            </h2>
            <p className="text-xl text-muted-foreground">
              A complete history of all updates and improvements
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {changelog.map((release, index) => (
              <Card key={release.version} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-3">
                        Version {release.version}
                        <Badge 
                          variant={
                            release.type === "Major Release" ? "default" :
                            release.type === "Feature" ? "secondary" :
                            release.type === "Improvement" ? "outline" :
                            "destructive"
                          }
                        >
                          {release.type}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{release.date}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {release.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay informed about new features, improvements, and important announcements 
              by following our changelog or subscribing to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:updates@ateendamate.com?subject=Subscribe to Updates"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Subscribe to Updates
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent/5 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}