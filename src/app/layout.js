import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Faiz Al Ghozi - Portfolio",
  description:
    "I am a Software Engineer with over 1 year of experience. I am also a student at Universitas Muhammadiyah Prof. Dr. HAMKA (UHAMKA) with a strong passion for programming. I possess in-depth knowledge and skills in technologies such as React JS, Next JS, Node JS, and Flutter. My experience encompasses a variety of projects, including active participation in developing web projects for government institutions. I enjoy combining my academic insights with the practical understanding I've gained from working in the industry. I am always eager to continue learning and innovating towards achieving optimal and high-quality software solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
