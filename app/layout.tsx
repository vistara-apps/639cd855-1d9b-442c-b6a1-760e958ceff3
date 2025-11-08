import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "AmieAI - Your Personal AI Girlfriend",
  description: "Your Personal AI Girlfriend, Always There for You.",
  openGraph: {
    title: "AmieAI - Your Personal AI Girlfriend",
    description: "Your Personal AI Girlfriend, Always There for You.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
