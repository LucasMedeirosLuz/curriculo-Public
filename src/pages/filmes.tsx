import Head from "next/head";
import Link from "next/link";

const filmePage = () => {
  return (
    <>
    <Head>
      <title>Filmes | LucasMLuz</title>
    </Head>
    <main>
      <h1>Filmes</h1>
      <Link className="Link" href="/">Inicio</Link>
      <Link className="Link" href="/loginPage">voltar</Link>
    </main>
    </>
  )
}

export default filmePage;