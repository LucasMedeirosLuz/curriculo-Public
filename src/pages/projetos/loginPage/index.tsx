import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const button = () => {
  
}

const loginPage = () => {
  return (
    <div className={`${'test'} flex justify-center items-center`}>
    <Head>
      <title>Pagina de Login | LucasMLuz</title>
    </Head>
    <main className={`flex justify-center items-center flex-col md:flex-row`}> 
      <div className="mb-10 flex justify-center items-center flex-col">
        <h1>Bem Vindo ao melhor site <br /> de streme do Brasil</h1>
        <Image
        src="/popcor.svg"
        width={300}
        height={300}
        alt='imagem de um balde de pipoca'
        className=""
        />
      </div>
      <div className={`w-[70vw] md:w-[50vw] flex justify-center content-center items-center flex-col`}>
        <input
          type="text"
          id="Email"
          name="Email"
          placeholder="Email"
          className={`p-[3px] my-3`}
        />
        <input 
          type="password" 
          id="senhaLogin" 
          name="password"
          placeholder="Senha"
          className={`p-[3px] my-3`}
        />
        <button
          className="bg-l-yellow-4 text-black rounded-md p-1 w-20 my-3"
          type="button"
          onClick={ button }
          disabled={ !button }
        >
          Entrar
        </button>
      </div>
      {/* <div>
      <Link 
        href="/projetos"
        className=""
        >
         Volta
        </Link>
      </div> */}
    </main>
    </div>
  )
}

export default loginPage;