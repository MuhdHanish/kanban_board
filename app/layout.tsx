import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban Board",
  description: "A dynamic and interactive Kanban board built with Next.js, Tailwind CSS, and Framer Motion.",
  keywords: ["Kanban", "Board", "Next.js", "Tailwind CSS", "Framer Motion", "Project Management", "Workflow Management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-full bg-neutral-900 text-neutral-50">
          {children}
        </div>
      </body>
    </html>
  );
}
