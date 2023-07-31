import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer"
import { Arvo } from "next/font/google";

const arvo = Arvo({
  subsets: ['latin'],
  weight: '400'

});

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children } : LayoutProps) => {
  return (
    <div className={arvo.className}>
      <Header />
      <div className="min-h-screen">
      {children}
      </div>
      <Footer />
    </div>
  );
};