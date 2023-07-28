import AboutMe from "@/components/home/AboutMe";
import Head from "next/head";


const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | LucasMLuz</title>
      </Head>
      <main>
        <h1>Ola Mundo</h1>
        <AboutMe />
      </main>
    </>
  )
}

export default Home;
