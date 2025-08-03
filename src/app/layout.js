import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBg from "@/components/FireFliesBg";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Saad's Portfolio",
  description: "Frontend Developer | React & Next.js Expert | Mobile App Developer | TypeScript Specialist | N8N Automation Architect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
        <FireFliesBg/>
        <Sound/>

        <div id="my-modal"/>
      </body>
    </html>
  );
}