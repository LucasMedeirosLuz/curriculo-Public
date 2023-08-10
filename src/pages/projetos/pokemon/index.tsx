/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useState } from "react";
import Head from "next/head";
import Card from "@/components/pokemon/card";
import IndexSearch from "@/components/pokemon/searchBar";
import FilterType from "@/components/pokemon/filtertype";
import FilterTypemd from "@/components/pokemon/filtertypesmd";
import { TypeIcon } from "@/components/icons/typesmenu";

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

const pokemon = (props) => {

  const [result, setResult] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [type, setTypefilter] = useState('');


  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, []);

  console.log(type);
  

  return(
    <>
    <Head>
      <title>Pokemon | LucasMLuz</title>
    </Head>
    <div className="mx-0 md:mx-8">
      <div>
      <h1 className="h1poke">Poke<span className="text-red-500">Dex</span></h1>
      </div>
      <div className="flex content-center justify-center">
        <IndexSearch setResult={setResult}/>
      </div>
      <div className="p-1 flex justify-center bg-l-blue-5 mx-[40%] md:hidden">
        <button onClick={openMenu}>
          <TypeIcon />
        </button>
      </div>
      <div>
        <FilterType isVisible={isMenuOpen} onClose={closeMenu} setTypeButton={setTypefilter} />
        <FilterTypemd setTypeButton={setTypefilter}/>
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