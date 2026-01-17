import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Lokesh's Portfolio",
  description: "Nachukuppam Lokesh - ECE Student & Aspiring Software Engineer",
  icons: {
    icon: "/lokesh.png",
  },
  openGraph: {
    type: "website",
    title: "Lokesh's Portfolio",
    description: "Nachukuppam Lokesh - ECE Student & Aspiring Software Engineer",
    images: ["/avatar.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh's Portfolio",
    description: "Nachukuppam Lokesh - ECE Student & Aspiring Software Engineer",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="lazyOnload"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
