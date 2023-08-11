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

  data.results.forEach((item, index) => {
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
  const [type, setType] = useState(0);
  const [idFilterType, setIsFilterType] = useState(
    [{pokemon:'', id: NaN, name: String}]
  );



  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, []);

  setTimeout(async function(){
    let takeId = [];
    let types = [];
    // let final = [];

    if (type > 0) {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await res.json();
      takeId = data.pokemon.map((item) => item.pokemon.url.substr(-6).replace(/\D+/g, ''));

      types = takeId.filter((item) => item < 251);

      const filter = data.pokemon.slice(0,types.length);

      filter.forEach((item, index) => item.pokemon.id = types[index]);

      setIsFilterType(filter);

    };
    
  }, 100);

  // setTimeout(() => {
  //   setIsFilterType(filter);
  // }, 3000);

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
      <div className="inset-0">
        <FilterType isVisible={isMenuOpen} onClose={closeMenu} setTypeButton={setType} />
        <FilterTypemd setTypeButton={setType}/>
      </div>
      <div className="containercard">
        { type == 0 &&
           props.pokemons.filter((item) => item.name.toLowerCase().includes(result.toLowerCase())).map((pokemon) =>
            <Card key={pokemon.id} pokemon={pokemon} />
            ) ||
            idFilterType.map((item, i) => (<Card key={i} pokemon={item.pokemon} />))
        }
      </div>
    </div>
    </>
  )
};

export default pokemon;