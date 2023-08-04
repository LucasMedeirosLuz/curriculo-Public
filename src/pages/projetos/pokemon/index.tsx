import Head from "next/head";
import Card from "@/components/pokemon/card";


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
  // console.log(data);
  return {
    props: {
      pokemons: data.results,
    },
  }
}

const pokemon = ({pokemons}) => {
  return(
    <>
    <Head>
      <title>Pokemon | LucasMLuz</title>
    </Head>
    <div>
    <h1 className="h1poke">Poke<span className="text-red-500">Dex</span></h1>
    </div>
    <div className="containercard">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
    </>
  )
};

export default pokemon;
