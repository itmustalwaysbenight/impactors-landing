import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impactors - Making an Impact Together",
  description: "Impactors is a startup focused on making a positive impact on the world through innovative solutions.",
  keywords: ["startup", "impact", "innovation", "technology", "sustainability"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
