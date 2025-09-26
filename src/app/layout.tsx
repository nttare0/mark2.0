import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/app/theme-provider';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'mark2.0',
  description: 'A sophisticated conversational AI assistant app',
};

const faviconSvg = `
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="robot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="hsl(var(--primary))" />
      <stop offset="100%" stop-color="hsl(var(--ring))" />
    </linearGradient>
    <path
      d="M30 40 C30 20, 120 20, 120 40 V110 C120 130, 30 130, 30 110 Z"
      fill="url(#robot-gradient)"
      stroke="hsl(var(--primary))"
      stroke-width="3"
    />
    <circle cx="60" cy="65" r="10" fill="hsl(var(--background))" />
    <circle cx="90" cy="65" r="10" fill="hsl(var(--background))" />
    <rect x="65" y="95" width="20" height="5" rx="2.5" fill="hsl(var(--background))" />
    <line x1="75" y1="20" x2="75" y2="10" stroke="hsl(var(--primary))" stroke-width="2" />
    <circle cx="75" cy="10" r="4" fill="hsl(var(--ring))" />
  </svg>
`;

// Function to encode SVG for data URI, handling special characters
function encodeSvg(svgString: string) {
  return svgString
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' '); // a space is valid in data URIs, but let's clean up
}

const faviconDataUri = `data:image/svg+xml,${encodeSvg(faviconSvg)}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={faviconDataUri} type="image/svg+xml" />
      </head>
      <body className={cn('font-sans antialiased', inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
