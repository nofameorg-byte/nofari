import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "NOFARI Intelligence Platform",
  description: "Permanent foundation for the NOFARI Intelligence Platform.",
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
