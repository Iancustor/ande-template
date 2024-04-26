import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ande Template",
  description: "Generated at Desishub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[rgb(255,248,240)] flex flex-col min-h-screen px-12 ">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
