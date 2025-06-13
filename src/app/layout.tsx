import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Clases de Piano | Aprende Piano con un Profesor Experto",
  description: "Clases personalizadas de piano para todos los niveles. Método único y efectivo para aprender piano a tu ritmo.",
  icons: {
    icon: [
      { url: '/logo.ico' },
      { url: '/logo.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/logo.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
