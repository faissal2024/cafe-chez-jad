import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Cairo } from "next/font/google";
import "./globals.css";
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const arabic = Cairo({ subsets: ["arabic", "latin"], variable: "--font-arabic" });
export const metadata: Metadata = {
  title: "Café Chez Jad | Menu",
  description: "Découvrez la carte de Café Chez Jad : cafés, jus, boissons fraîches, eaux, snacks salés et biscuits.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={`${display.variable} ${body.variable} ${arabic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
