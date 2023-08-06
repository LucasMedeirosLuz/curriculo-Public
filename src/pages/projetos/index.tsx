import Head from "next/head";
import Link from "next/link";

const Projetos = () => {
  return (
    <>
    <Head>
      <title>Projetos | LucasMLuz</title>
    </Head>
    <h1 className="flex text-4xl justify-center my-6">Projetos</h1>
    <div className="flex justify-center text-2xl gap-10">
      <Link className="bg-l-blue-5 rounded p-2" href="/projetos/pokemon">Pokemon</Link>
      <Link className="bg-l-blue-5 rounded p-2" href="/projetos/loginPage">Pagina de Login</Link>
    </div>
    </>
  )
};

export default Projetos;