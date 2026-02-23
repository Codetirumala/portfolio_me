import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Reddi Lakshmi Narasimha | Full Stack Developer",
  description:
    "Portfolio of Reddi Lakshmi Narasimha – Full Stack Developer, MERN Stack Expert, and AI/ML Enthusiast. Building scalable, user-centric solutions.",
  keywords: [
    "Reddi Lakshmi Narasimha",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "AI/ML",
    "Portfolio",
  ],
  authors: [{ name: "Reddi Lakshmi Narasimha" }],
  openGraph: {
    title: "Reddi Lakshmi Narasimha | Full Stack Developer",
    description:
      "Dynamic Computer Science student with expertise in AI integration and MERN stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
