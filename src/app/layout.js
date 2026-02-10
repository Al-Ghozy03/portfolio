import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Faiz Al Ghozi - Portfolio",
  description:
    "Software Engineer with 3 years of experience delivering production-ready web applications across healthcare, government, and event management sectors. Strong in backend development using Golang and NestJS, complemented by frontend expertise with Next.js and Tailwind CSS. Experienced in designing and integrating RESTful APIs, managing PostgreSQL and MySQL databases, and handling large-scale data processing with Python. Successfully contributed to 10+ projects, building scalable, maintainable, and high-performance systems while collaborating in Agile cross-functional teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
