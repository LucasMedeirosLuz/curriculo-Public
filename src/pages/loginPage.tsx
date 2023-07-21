import Link from "next/link";

const button = () => {

}

const loginPage = () => {
  return (
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
        <label htmlFor="Email">Email :</label>
        <input type="text" id="Email" name="Email" className="inputLogin"/>
        <label htmlFor="senhaLogin">Senha :</label>
        <input type="password" id="senhaLogin" name="password" className="inputLogin"/>
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
  )
}

export default loginPage;