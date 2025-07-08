import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Faiz Al Ghozi - Portfolio",
  description:
    "Fullstack Developer with 2+ years of experience in building web applications using Node.js, Express.js, React.js, Next.js, and Nest.js. Skilled in developing and integrating RESTful APIs, managing databases such as PostgreSQL and MySQL, and creating responsive user interfaces with Tailwind CSS. Contributed to 5+ projects across industries including government and healthcare. Proficient with tools like Git, Postman, and experienced in working within Agile cross functional teams. Committed to delivering clean, scalable, and maintainable code on both frontend and backend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
