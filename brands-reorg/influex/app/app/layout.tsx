import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influex Ecosystem | Client-Centric Brand Platform",
  description:
    "AI-Powered Client Experience Center - Where everything exists to serve the client",
  keywords: ["Influex", "Brand Engine", "AI Platform", "Client Dashboard"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="bg-orb w-[600px] h-[600px] bg-hub/20 top-[-100px] left-[-100px]"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="bg-orb w-[500px] h-[500px] bg-authority/20 top-[20%] right-[-50px]"
            style={{ animationDelay: "5s" }}
          />
          <div
            className="bg-orb w-[400px] h-[400px] bg-brand/15 bottom-[-50px] left-[30%]"
            style={{ animationDelay: "10s" }}
          />
          <div
            className="bg-orb w-[350px] h-[350px] bg-sales/15 bottom-[10%] right-[20%]"
            style={{ animationDelay: "15s" }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
