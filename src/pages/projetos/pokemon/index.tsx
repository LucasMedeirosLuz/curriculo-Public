import Head from "next/head";
import Card from "@/components/pokemon/card";
import IndexSearch from "@/components/pokemon/searchBar";
import { useState } from "react";

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
    },
  }
}

// const search = (value) => {
//   if (value === '') {
//     console.log('nada aqui');
//   } if (value !== '') {
//     console.log(value);
//   }

//   poke = poke.filter((item) => 
//     item.name.toLowerCase().includes(value.toLowerCase())
//   )
// };



const pokemon = (props) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [result, setResult] = useState('');

  const search = () => {
    let poke = props.pokemons;
      poke = poke.filter((item) => item.name.toLowerCase().includes(result.toLowerCase()));
    console.log(poke);
        
  };
  
  return(
    <>
    <Head>
      <title>Pokemon | LucasMLuz</title>
    </Head>
    <div className="mx-0 md:mx-8">
      <div>
      <h1 className="h1poke">Poke<span className="text-red-500">Dex</span></h1>
      </div>
      <div>
        <IndexSearch setResult={setResult}/>
      </div>
      <div className="containercard">
        {props.pokemons.filter((item) => item.name.toLowerCase().includes(result.toLowerCase())).map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
    </>
  )
};

export default pokemon;