import Head from "next/head";
import Link from "next/link";

const Projetos = () => {
  return (
    <>
    <Head>
      <title>Projetos | LucasMLuz</title>
    </Head>
    <h1>Ola Mundo</h1>
    <div>
      <Link href="/projetos/pokemon">Pokemon</Link>
      <Link href="/projetos/loginPage">Pagina de Login</Link>
    </div>
    </>
  )
};

export default Projetos;