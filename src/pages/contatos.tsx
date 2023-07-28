import Head from "next/head";

const Contatos = () => {
  return (
    <>
    <Head>
      <title>Contatos | LucasMLuz</title>
    </Head>
    <div>
      <h1>Contatos</h1>
      <ul>
        <li>
          <span>E-mail</span>
          <div>
            <a href="mailto:lucasdmluz@hotmail.com">
              lucasdmluz@hotmail.com
            </a>
          </div>
        </li>
        <li>
          <span>GitHub</span>
          <div>
            <a href="https://github.com/LucasMedeirosLuz">
              https://github.com/LucasMedeirosLuz
            </a>
          </div>
        </li>
        <li>
          <span>Linkedin</span>
          <div>
            <a href="https://www.linkedin.com/in/lucas-de-medeiros-luz-33b85422b/">
              https://www.linkedin.com/in/lucas-de-medeiros-luz-33b85422b/
            </a>
          </div>
        </li>
      </ul>
    </div>
    </>
  )
};

export default Contatos;