import Link from "next/link";
import Image from "next/image";
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: '500',
});

export const Header = () => {
  return (
    <header className={josefin_sans.className}>
      <Link href="/">
        <Image src="/lampada.png" alt="icon uma lampada" width={'55'} height={'55'}/>
      </Link>
      <nav>
        <Link href="/">Sobre mim</Link>
        <Link href="/contatos">Contatos</Link>
        <Link href="/loginPage">Login Page</Link>
        <Link href="/">Projeto2</Link>
      </nav>
    </header>
  )
};