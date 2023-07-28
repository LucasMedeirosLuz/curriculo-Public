import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src="/lampada.png" alt="icon uma lampada" width={'100'} height={'100'}/>
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