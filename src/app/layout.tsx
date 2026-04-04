import "./globals.css";
import { AuthProvider } from "../../context/auth.context";
import { Playfair_Display, Montserrat } from "next/font/google";
import ToastProvider from "./providers/toastprovider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-(--font-playfair)">
        <ToastProvider/>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

 