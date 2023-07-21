import Link from "next/link";

const filmePage = () => {
  return (
    <main>
      <h1>Filmes</h1>
      <Link href="/">Inicio</Link>
      <Link href="/loginPage">voltar</Link>
    </main>
  )
}

export default filmePage;