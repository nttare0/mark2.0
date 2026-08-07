'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SeoJsonLd from '@/components/app/seo-json-ld';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
              <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Last updated: August 7, 2026
              </CardDescription>
              <div className="text-center">
                <Link href="/terms-and-conditions" className="text-sm text-primary hover:underline">
                  View our Terms and Conditions
                </Link>
              </div>
            </CardHeader>
            <CardContent className="prose max-w-none prose-invert prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg">
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to <strong>mark2.0</strong> ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI conversational assistant service (the "Service").
                </p>
                <p className="mb-4">
                  By using the Service, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, do not use the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
                
                <h3 className="text-lg font-semibold mb-3">Information You Provide Directly:</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Chat Inputs:</strong> Text messages and voice recordings you submit to the AI</li>
                  <li><strong>Code and Content:</strong> Any code, websites, or other content you create using the Service</li>
                  <li><strong>Feedback:</strong> Any feedback or suggestions you provide</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Information Collected Automatically:</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Usage Data:</strong> Information about how you interact with the Service, including pages visited, features used, and time spent</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers</li>
                  <li><strong>Session Data:</strong> Code and content stored in your browser's session storage</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect for various purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To provide, operate, and maintain the Service</li>
                  <li>To improve, personalize, and expand the Service</li>
                  <li>To understand and analyze how you use the Service</li>
                  <li>To develop new products, services, features, and functionality</li>
                  <li>To communicate with you, either directly or through one of our partners, including for customer service</li>
                  <li>To process your requests and prevent fraudulent or abusive activity</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">4. Voice Data and Audio Recordings</h2>
                <p className="mb-4">
                  When you use the voice interaction features:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Audio recordings are processed in real-time for transcription</li>
                  <li>Voice data is <strong>not permanently stored</strong> on our servers</li>
                  <li>Audio is transcribed to text and then discarded</li>
                  <li>We do not use voice recordings for training AI models without your explicit consent</li>
                </ul>
                <p className="mb-4">
                  <strong>Note:</strong> Voice data is processed by third-party AI services (Google AI) in accordance with their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">5. AI Model Providers</h2>
                <p className="mb-4">
                  We use third-party AI services to provide the Service:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Google AI (Gemini):</strong> Processes your prompts and generates responses. Your data is subject to Google's privacy policies.</li>
                </ul>
                <p className="mb-4">
                  These third-party providers may have access to your data solely for the purpose of providing the Service. We encourage you to review their privacy policies:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><a href="https://policies.google.com/privacy" className="text-primary hover:underline">Google Privacy Policy</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">6. Data Retention</h2>
                <p className="mb-4">
                  We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p className="mb-4">
                  <strong>Session Data:</strong> Code and content stored in session storage is automatically deleted when you close your browser or end your session.
                </p>
                <p className="mb-4">
                  <strong>Chat History:</strong> Conversation history may be stored temporarily for service improvement but is not permanently retained.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">7. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>
                <p className="mb-4">
                  While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">8. Your Privacy Rights</h2>
                
                <h3 className="text-lg font-semibold mb-3">Access and Control:</h3>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Request transfer of your personal information</li>
                </ul>
                <p className="mb-4">
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>

                <h3 className="text-lg font-semibold mb-3">Opting Out:</h3>
                <p className="mb-4">
                  You can stop using the Service at any time. To clear your session data, simply close your browser or clear your browser's session storage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">9. Children's Privacy</h2>
                <p className="mb-4">
                  The Service is not intended for use by children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children under these ages.
                </p>
                <p className="mb-4">
                  If we become aware that we have collected personal information from a child under these ages without parental consent, we will take steps to remove that information from our servers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">10. International Data Transfers</h2>
                <p className="mb-4">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
                </p>
                <p className="mb-4">
                  By using the Service, you consent to this transfer and to the processing of your information on servers located outside of your country of residence.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
                <p className="mb-4">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">12. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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
