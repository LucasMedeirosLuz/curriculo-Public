import Link from "next/link";
import Head from "next/head";

const button = () => {
  
}

const loginPage = () => {
  return (
    <>
    <Head>
      <title>Pagina de Login | LucasMLuz</title>
    </Head>
    <main>
      <div>
      <Link 
        href="/projetos"
        className="Link"
        >
         Volta
        </Link>
      </div> 
      <div className="loginContainer">
        <div>
        <label htmlFor="Email">Email</label>
        <input type="text" id="Email" name="Email" className="inputLogin"/>
        </div>
        <div>
        <label htmlFor="senhaLogin">Senha</label>
        <input type="password" id="senhaLogin" name="password" className="inputLogin"/>
        </div>
        <button
          className="loginButton"
          type="button"
          onClick={ button }
          disabled={ !button }
        >
          Entrar
        </button>
      </div>
    </main>
    </>
  )
}

export default loginPage;