//===== Import Fonts =====
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-primary",
});
//===== Import Components =====
import { Header } from "@/components";
//===== Import Css =====
import "./globals.css";
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "GP-Led TRT For Aussie Men",
  description: "Test your T, protect it, and enhance your levels if needed.",
  //===== OG Tags =====
  openGraph: {
    title: "GP-Led TRT For Aussie Men",
    description: "Test your T, protect it, and enhance your levels if needed.",
    url: "/",
    siteName: "",
    locale: "en_US",
    type: "website",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
