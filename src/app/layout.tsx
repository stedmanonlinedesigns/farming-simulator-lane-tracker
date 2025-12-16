import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Farming Simulator Lane Tracker",
  description: "Count lanes while planting seeds.",
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
