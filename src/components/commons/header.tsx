import Link from "next/link";
import Image from "next/image";
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: '500',
});

export const Header = () => {
  return (
    <header className={`${josefin_sans.className}
      bg-l-blue-5 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`
    }>
      <Link href="/">
        <Image src="/lampada.png" alt="icon uma lampada" width={'35'} height={'35'}/>
      </Link>
      <nav className="flex items-center gap-4 md:gap-10 text-md md:text-xl">
        <Link href="/">Sobre mim</Link>
        <Link href="/contatos">Contatos</Link>
        <Link href="/projetos">Projetos</Link>
      </nav>
    </header>
  )
};