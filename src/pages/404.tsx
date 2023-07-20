import Link from "next/link"

const erro = () => {
  return (
    <div>
      <div>
        <h1>404 \ ERRO</h1>
        <p>Pagina não encontrada</p>
      </div>
      <div>
        <p>Ir para pagina inicial</p>
        <Link href="/">Inicio</Link>
      </div>
    </div>
  )
}

export default erro;