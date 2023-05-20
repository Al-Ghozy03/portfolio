import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Faiz Al Ghozi - Portfolio",
  description:
    "Hi, I'm Muhammad Faiz Al Ghozi. I am a recent graduate who has an interest in working in the field of programming. Accustomed to using various programming languages such as HTML, CSS, Javascript and using Frameworks such as React JS, Next JS, Node JS, Flutter. Honest, disciplined and able to work well in a team. Has an internship experience of 6 months and has participated in making web government websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
