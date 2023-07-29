import { ReactNode } from "react";
import { Header } from "./header";
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
      {children}
    </div>
  );
};