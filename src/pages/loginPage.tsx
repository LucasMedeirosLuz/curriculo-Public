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
        href="/"
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
      </div>
      <div>
        <Link
          href="/filmes"
        >
          <button
            type="button"
            onClick={ button }
            disabled={ !button }
            className="loginButton"
          >
            entrar
          </button>
        </Link>
      </div>
    </main>
    </>
  )
}

export default loginPage;