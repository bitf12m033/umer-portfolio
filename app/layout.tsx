import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle =
  "M. Umer Majeed | Full Stack Engineer | AI-Integrated Systems";

const siteDescription =
  "Portfolio of M. Umer Majeed, a Full Stack Engineer specializing in modern web systems, integrations, and AI-enabled products.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "M. Umer Majeed",
    "Full Stack Engineer",
    "AI-Integrated Systems",
    "AI-enabled products",
    "Next.js",
    "React",
    "Laravel",
    "PHP",
    "Python",
    "TypeScript",
    "Google Cloud",
    "GCP",
    "Vertex AI",
    "API integration",
    "REST APIs",
    "Portfolio",
    "Web development",
    "Software engineer",
  ],
  authors: [{ name: "M. Umer Majeed" }],
  creator: "M. Umer Majeed",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "M. Umer Majeed",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-[#0a0a0a] font-sans text-zinc-200 antialiased">
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden
        >
          <div className="absolute left-1/2 top-0 h-168 w-2xl -translate-x-1/2 rounded-full bg-violet-500/7 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-112 w-md rounded-full bg-cyan-500/5 blur-3xl" />
        </div>
        <div className="flex min-h-full flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
