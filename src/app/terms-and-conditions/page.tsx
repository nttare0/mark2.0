'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SeoJsonLd from '@/components/app/seo-json-ld';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SeoJsonLd />
      <header className="flex h-16 shrink-0 items-center justify-between border-b px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-primary md:text-2xl">mark2.0</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Home</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto max-w-4xl py-12 px-4 md:py-16 md:px-6">
          <Card className="bg-card border shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Terms and Conditions</CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Last updated: August 7, 2026
              </CardDescription>
              <div className="text-center">
                <Link href="/privacy-policy" className="text-sm text-primary hover:underline">
                  View our Privacy Policy
                </Link>
              </div>
            </CardHeader>
            <CardContent className="prose max-w-none prose-invert prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg">
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to <strong>mark2.0</strong> ("we", "our", "us"). These Terms and Conditions govern your use of our AI conversational assistant service, including all features, tools, and functionality provided through our website and application (collectively, the "Service").
                </p>
                <p className="mb-4">
                  By accessing or using the Service, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional terms applicable to specific features of the Service. If you do not agree to these terms, please do not use the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">2. Acceptance of Terms</h2>
                <p className="mb-4">
                  By using the Service, you affirm that you are at least 13 years of age or older, or that you have the legal capacity to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">3. Description of Service</h2>
                <p className="mb-4">
                  mark2.0 is an AI-powered conversational assistant that provides:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Text-based chat with AI responses</li>
                  <li>Voice interaction (speech-to-text and text-to-speech)</li>
                  <li>Code generation and web development assistance</li>
                  <li>Integration with third-party APIs for enhanced responses</li>
                </ul>
                <p className="mb-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">4. User Responsibilities</h2>
                <p className="mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Providing accurate and complete information when using the Service</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Using the Service in a manner consistent with these Terms</li>
                  <li>Not using the Service for any illegal or unauthorized purpose</li>
                  <li>Not interfering with or disrupting the Service or its servers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">5. Prohibited Activities</h2>
                <p className="mb-4">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing any intellectual property rights</li>
                  <li>Transmitting any harmful, fraudulent, or deceptive content</li>
                  <li>Using the Service to create or distribute malware, viruses, or other harmful code</li>
                  <li>Attempting to reverse engineer or access the underlying AI models</li>
                  <li>Using automated means to access or scrape the Service</li>
                  <li>Impersonating any person or entity</li>
                  <li>Engaging in any activity that could harm the Service or other users</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">6. Intellectual Property</h2>
                <p className="mb-4">
                  All content, features, and functionality of the Service, including but not limited to text, graphics, logos, images, and software, are the property of mark2.0 or its content suppliers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p className="mb-4">
                  The AI models used by the Service are provided by third-party providers (including Google AI) and are subject to their respective terms and conditions.
                </p>
                <p className="mb-4">
                  You retain ownership of any content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute that content in connection with providing the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">7. AI Output and Accuracy</h2>
                <p className="mb-4">
                  The Service uses AI models that may produce inaccurate, misleading, or offensive content. AI responses should not be relied upon for:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Medical, legal, or financial advice</li>
                  <li>Critical decision-making without human review</li>
                  <li>Any purpose that could cause harm or injury</li>
                </ul>
                <p className="mb-4">
                  You are solely responsible for evaluating the accuracy, completeness, and usefulness of any AI-generated content. We do not warrant that the Service will be error-free or that AI responses will be accurate.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">8. Third-Party Services</h2>
                <p className="mb-4">
                  The Service may integrate with third-party APIs and services (such as Google AI, OpenWeatherMap, etc.). Your use of these third-party services is subject to their respective terms and conditions. We are not responsible for the content, accuracy, or availability of any third-party services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">9. Privacy and Data</h2>
                <p className="mb-4">
                  Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to our collection, use, and disclosure of your information as described in the Privacy Policy.
                </p>
                <p className="mb-4">
                  Please note that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Voice recordings are processed in real-time and are not permanently stored</li>
                  <li>Chat conversations may be logged for service improvement (subject to Privacy Policy)</li>
                  <li>Code and content you generate may be stored in your browser's session storage</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">10. Disclaimers and Limitations of Liability</h2>
                <p className="mb-4">
                  <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</strong>
                </p>
                <p className="mb-4">
                  To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties that the Service will be uninterrupted or error-free</li>
                  <li>Warranties that the Service or its results will be accurate or reliable</li>
                </ul>
                <p className="mb-4">
                  In no event shall we, our affiliates, or our licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">11. Indemnification</h2>
                <p className="mb-4">
                  You agree to indemnify, defend, and hold harmless mark2.0, its affiliates, and its respective directors, officers, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, debts, and expenses (including but not limited to attorney's fees) arising from:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">12. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your access to the Service at any time, without notice, for conduct that we believe violates these Terms or any applicable law, or for any other reason in our sole discretion.
                </p>
                <p className="mb-4">
                  Upon termination, your right to use the Service will immediately cease. We shall not be liable to you or any third party for any termination of your access to the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">13. Governing Law and Dispute Resolution</h2>
                <p className="mb-4">
                  These Terms shall be governed and construed in accordance with the laws of Rwanda, without regard to its conflict of law provisions.
                </p>
                <p className="mb-4">
                  Any legal action of whatever nature shall be brought in the courts of Kigali, Rwanda.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">14. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="mb-4">
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">15. Contact Information</h2>
                <p className="mb-4">
                  For any questions about these Terms and Conditions, please contact us:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Creator:</strong> Ntare Shema Prince</li>
                  <li><strong>Website:</strong> <a href="https://mark210.netlify.app/mark210" className="text-primary hover:underline">https://mark210.netlify.app/mark210</a></li>
                </ul>
              </section>

              <section className="text-center py-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} mark2.0. All rights reserved.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
