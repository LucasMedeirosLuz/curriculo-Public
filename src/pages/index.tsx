import AboutMe from "@/components/home/AboutMe";
import Head from "next/head";


const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | LucasMLuz</title>
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md: space-y-20">
        <AboutMe />
      </div>
    </>
  )
}

export default Home;
