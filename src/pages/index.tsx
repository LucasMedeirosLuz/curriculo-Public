import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | LucasMLuz</title>
      </Head>
      <main>
        <h1>Ola Mundo</h1>
        <Link 
          href="/loginPage"
          className="Link"
        >
          Login Page
        </Link>
      </main>
    </>
  )
}

export default Home;
