import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Instituto Hands On — Quality Assurance",
  description: "Torne-se um Testador de Software em 6 meses. Do zero ao empregado com R$4k a R$20k/mês.",
  openGraph: {
    title: "Instituto Hands On — Quality Assurance",
    description: "Torne-se um Testador de Software em 6 meses. Do zero ao empregado com R$4k a R$20k/mês.",
    url: "https://handson-lp-eta.vercel.app",
    siteName: "Instituto Hands On",
    images: [
      {
        url: "https://handson-lp-eta.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Instituto Hands On — Quality Assurance",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Hands On — Quality Assurance",
    description: "Torne-se um Testador de Software em 6 meses. Do zero ao empregado com R$4k a R$20k/mês.",
    images: ["https://handson-lp-eta.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
