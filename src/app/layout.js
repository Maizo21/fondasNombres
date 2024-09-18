import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nabana = localFont({
  src: "./fonts/Nabana.woff",
  variable: "--font-nabana",
  weight: "100 900",
});

export const metadata = {
  title: "Nombres de Fondas",
  description: "Generador de nombres de fondas chilenas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${nabana.variable}`}>
        {children}
      </body>
    </html>
  );
}
