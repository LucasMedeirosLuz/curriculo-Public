import Head from "next/head";
import Card from "@/components/pokemon/card";

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
    <div className="mx-0 md:mx-8">
      <div>
      <h1 className="h1poke">Poke<span className="text-red-500">Dex</span></h1>
      </div>
      <div className="divSearch">
        <label htmlFor="search">Buscar Pokemon</label>
        <input type="search" className="inputsearch"/>
      </div>
      <div className="containercard">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
    </>
  )
};

export default pokemon;
