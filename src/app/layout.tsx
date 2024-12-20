import type { Metadata } from "next";
import "./globals.css";
import { inter, clash } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: '%s - Fiston Turner',
    default: 'Fiston Turner - Design Engineer & Product Designer',
  },
  description: "Design Engineer & Product Designer focused on building accessible, user-centric digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${clash.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
