import "./globals.css";
import { AuthProvider } from "../../context/auth.context";
import { Playfair_Display, Montserrat } from "next/font/google";
import ToastProvider from "./providers/toastprovider";
import { ContactProvider } from "context/contact.context";

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
        <ToastProvider />
        <ContactProvider>
          <AuthProvider>{children}</AuthProvider>
        </ContactProvider>
      </body>
    </html>
  );
}
// ================================================================================================================

// ✅ BEST PRACTICE (Industry Way)
// 🔥 Solution: Combine Providers (Provider Wrapper)
// 🚀 Step 1: Create Providers.tsx
// "use client";

// import { ReactNode } from "react";
// import { AuthProvider } from "@/context/AuthContext";
// import { ContactProvider } from "@/context/ContactContext";
// import ToastProvider from "@/providers/ToastProvider";

// interface Props {
//   children: ReactNode;
// }

// export default function Providers({ children }: Props) {
//   return (
//     <ToastProvider>
//       <AuthProvider>
//         <ContactProvider>
//           {children}
//         </ContactProvider>
//       </AuthProvider>
//     </ToastProvider>
//   );
// }
// 🚀 Step 2: Use in layout
// import Providers from "./providers";

// ================================================================================================================
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }
