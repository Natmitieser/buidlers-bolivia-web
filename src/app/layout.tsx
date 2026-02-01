import type { Metadata } from "next";
// 1. Importamos las fuentes de Google
import { VT323, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

// 2. Configuramos las fuentes
const fontTitle = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title", // Esto nos dejará usarla en CSS
});

const fontBody = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Buidlers Bolivia",
  description: "Comunidad de builders web3 en Bolivia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 3. Inyectamos las variables de las fuentes en el body */}
      <body className={`${fontTitle.variable} ${fontBody.variable} antialiased font-body bg-buidlers-black text-white`}>
        {children}
      </body>
    </html>
  );
}
