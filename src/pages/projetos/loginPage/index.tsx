import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const loginPage = () => {

  function verifyLogin() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;

    function ValidateEmail(email, senha) {

      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
      if (email.match(validRegex) && senha.length >= 8) {
        // alert("email foi");
        const url_atual = window.location.href;
        console.log(url_atual);
        
        window.location.href = `${url_atual}/filmes` ;
        return true
      } else {

        alert("Email ou senha invalido. A senha tem de ter no minimo 8 caracteres.");
        return false;
      }
    
    }

    console.log(ValidateEmail(email, senha));
  }

  return (
    <div className={`${'test'} flex justify-center items-center `}>
    <Head>
      <title>Pagina de Login | LucasMLuz</title>
    </Head>
    <main className={`flex justify-center items-center flex-col md:flex-row`}> 
      <div className="w-[70vw] md:w-[49vw] md:h-[100vh] mb-10 md:mb-0 flex justify-center items-center flex-col">
        <h1
          className="text-2xl italic text-l-yellow-1 font-bold"
        >Bem Vindo ao melhor site <br /> de streme do Brasil</h1>
        <Image
        src="https://raw.githubusercontent.com/LucasMedeirosLuz/curriculo-Public/38b9e47acc9997683eabe040ce6bd8aef579a98a/public/popcor.svg"
        width={300}
        height={300}
        alt='imagem de um balde de pipoca'
        className="md:w-[600px] md:h-[600]"
        />
      </div>
      <div className="w-[99vw] md:w-[49vw] mb-10 md:mb-0 flex justify-center items-center flex-col">
        <form className="w-[80%] md:w-[70%] md:py-10 flex justify-center items-center flex-col bg-l-purple-3 rounded-xl">
        <h3
          className="font-bold text-2xl text-l-yellow-1 p-5"
        >Login</h3>
        <input
          type="text"
          id="email"
          name="Email"
          placeholder="Email"
          className="p-[3px] my-3 w-[75%] max-w-[400px] text-black rounded-xl"
          required
        />
        <input 
          type="password" 
          id="senha" 
          name="password"
          placeholder="Senha"
          className="p-[3px] my-3 w-[75%] max-w-[400px] text-black rounded-xl"
          required
        />
        <button
          className="bg-l-yellow-2 text-black rounded-md p-1 w-20 my-3 font-bold flex justify-center items-center"
          type="button"
          onClick={ verifyLogin }
        >
          Entrar
        </button>
        </form>
      </div>
    </main>
    </div>
  )
}

export default loginPage;