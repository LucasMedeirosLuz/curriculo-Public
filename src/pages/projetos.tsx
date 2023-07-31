import Head from "next/head";
import Link from "next/link";

const Projetos = () => {
  return (
    <>
    <Head>
      <title>Projetos | LucasMLuz</title>
    </Head>
    <h1>Ola Mundo</h1>
    <Link href="/projetos/pokemon">Pokemon</Link>
    </>
  )
};

export default Projetos;