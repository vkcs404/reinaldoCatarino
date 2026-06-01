import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reinaldo Catarino | Mindfulness Leadership",
  description:
    "Experiential leadership workshops, personal growth journeys and transformational programs by Reinaldo Catarino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}