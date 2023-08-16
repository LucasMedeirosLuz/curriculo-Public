import Head from "next/head";
import Link from "next/link";

const Projetos = () => {
  return (
    <div className="">
    <Head>
      <title>Projetos | LucasMLuz</title>
    </Head>
    <h1 className="flex text-4xl justify-center my-6">Projetos</h1>
    <div className="flex justify-center text-2xl gap-10">
      <div>
      <Link className="bg-l-blue-5 rounded p-2" href="/projetos/pokemon">Pokemon</Link>
      </div>
      <div>
      <Link className="bg-l-blue-5 rounded p-2" href="/projetos/loginPage">Pagina de Login</Link>
      <p>Ainda em desenvolvimento</p>
      </div>
    </div>
    </div>
  )
};

export default Projetos;