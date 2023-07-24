import Head from "next/head";
import Link from "next/link"

const erro = () => {
  return (
    <>
    <Head>
      <title>404 | LucasMLuz</title>
    </Head>
    <main>
      <div>
        <h1>404 \ ERRO</h1>
        <p>Pagina não encontrada</p>
      </div>
      <div>
        <p>Ir para pagina inicial</p>
        <Link href="/">Inicio</Link>
      </div>
    </main>
    </>
  )
}

export default erro;