import Head from "next/head";
import Link from "next/link"
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: '500',
});

const erro = () => {
  return (
    <>
    <Head>
      <title>404 | LucasMLuz</title>
    </Head>
    <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 md:gap-4 px-6 md:px-32">
      <h1 className="text-5xl md:text-7xl font-bold" >404 \ ERRO</h1>
      <p className="flex flex-col gap-8 md:gap-4 md:text-xl">
        <span>Pagina não encontrada</span>
        <span>Ir para pagina inicial</span>
      </p>
      <Link href="/" className={`${josefin_sans}
        p-4 bg-l-blue-2 rounded-xl text-black mt-5 md:mt-12 w-fit`}
      >Inicio</Link>
    </div>
    </>
  )
}

export default erro;