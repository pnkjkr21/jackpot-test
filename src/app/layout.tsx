import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import QueryProvider from "@/components/QueryProvider/QueryProvider";
import "./globals.css";
import Header from "./components/Header/Header";
import { Suspense } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jackpot.bet",
  description: "Test your luck with Jackpot.bet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <QueryProvider>
          <div className="root-style">
            <Suspense>
              <Header />
              {children}
            </Suspense>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
