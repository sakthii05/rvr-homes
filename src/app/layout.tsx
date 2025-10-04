import type { Metadata } from "next";
import { Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import Layout from "@/components/common/Layout";

const geistSans = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "RVR Homes",
  description: "Your Vision, Our Construction",
  keywords: [
    "Chennai Home Construction",
    "Real Estate",
    "Interior design",
    "Home Renovation",
    "Virugambakkam Home builder",
    "chennai home builder",
  ],
  openGraph: {
    title: "RVR Homes",
    description: "Your Vision, Our Construction",
    url: "https://rvrhomes.in/",
    type: "website",
    siteName: "rvrhomes",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image", // Use for big image preview
    title: "RVR Homes",
    description: "Your Vision, Our Construction",
    images: ["/images/og-image.png"], // Should match OG image for consistency
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="google-site-verification"
        content="RTd72Wk_uE4PKUzNDWWXEHZmUBm3_GiGY0VA"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
