import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Faiz Al Ghozi - Portfolio",
  description:
    "I am a Software Engineer with 2 years of experience and a background in Informatics Engineering. I have successfully developed projects for the Indonesian government and in healthcare managed care. Proficient in frontend, backend, and mobile development using technologies like React.js, Next.js, NestJS, and Flutter, I am dedicated to delivering high-quality software solutions and continuously enhancing my skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
