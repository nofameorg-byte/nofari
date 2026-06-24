import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "NOFARI — Built to Think",
  description: "The NOFARI Intelligence Platform visual identity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
