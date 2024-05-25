import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban Board",
  description: "A dynamic and interactive Kanban board built with Next.js, Tailwind CSS, and Framer Motion.",
  keywords: ["Kanban", "Board", "Next.js", "Typescript", "Tailwind CSS", "Framer Motion", "Project Management", "Workflow Management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-neutral-50`}>
        <div className="lg:h-screen max-w-screen-2xl 2xl:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
