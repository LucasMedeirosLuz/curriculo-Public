import Head from "next/head";

const Contatos = () => {
  return (
    <>
    <Head>
      <title>Contatos | LucasMLuz</title>
    </Head>
    <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
      <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
      <ul className="table mx-auto space-y-6 md:space-y-8">
        <li className="md:text-xl">
          <span className="font-bold">E-mail</span>
          <div className="flex gap-1 md:gap-3 item-center">
            <a href="mailto:lucasdmluz@hotmail.com"
              className="text-sm md:text-lg underline trucate"
            >
              lucasdmluz@hotmail.com
            </a>
          </div>
        </li>
        <li>
          <span className="font-bold">GitHub</span>
          <div className="flex gap-1 md:gap-3 item-center">
            <a href="https://github.com/LucasMedeirosLuz"
              className="text-sm md:text-lg underline trucate"
            >
              https://github.com/LucasMedeirosLuz
            </a>
          </div>
        </li>
        <li>
          <span className="font-bold">Linkedin</span>
          <div className="flex gap-1 md:gap-3 item-center">
            <a href="https://www.linkedin.com/in/lucas-de-medeiros-luz/"
              className="text-sm md:text-lg underline trucate"
            >
              https://www.linkedin.com/in/lucas-de-medeiros-luz/
            </a>
          </div>
        </li>
      </ul>
    </div>
    </>
  )
};

export default Contatos;