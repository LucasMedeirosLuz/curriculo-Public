import Link from "next/link";

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
        <div>
          <label htmlFor="Email">Email :</label>
        </div>
        <div>
          <input type="text" id="Email" name="Email" className="inputLogin"/>
        </div>
        <div>
          <label htmlFor="senhaLogin">Senha :</label>
        </div>
        <div>
          <input type="password" id="senhaLogin" name="password" className="inputLogin"/>
        </div>
      </div>
    </main>
  )
}

export default loginPage;