import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children } : LayoutProps) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
};