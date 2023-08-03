import Head from "next/head";

// const apipoke = async () => {
//   const maxPokemons = 251
//   const api = 'https://pokeapi.co/api/v2/pokemon/'

//   const res = await fetch(api, { cache: 'no-store' })
//   const data = await res.json()
//   console.log(res)
//   console.log(data);
  
// }
// apipoke();

export async function getStaticProps() {

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item: { id: any; }, index: number) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    } 
  }

}

export default function pokeindex() {
  return(
    <>
    <Head>
      <title>Pokemon | LucasMLuz</title>
    </Head>
    <h1 className="h1poke">Ola Mundo Pokoemn</h1>
    </>
  )
};
