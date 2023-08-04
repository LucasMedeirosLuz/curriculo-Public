import Image from "next/image";

export const getStaticPaths = async() => {

  const maxPokemon = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const res = await fetch(`${api}/?limit=${maxPokemon}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {sobrepokemon: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async(context) => {

  const id = context.params.sobrepokemon;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data},
  }
};

// getStaticProps(0);

const Sobre = ({pokemon}) => {
  return (
    <>
    <div className="flex justify-center content-center text-3xl">
      <h1>{`Sobre ${pokemon.name}`}</h1>
    </div>
    <div className="flex justify-center content-center">
    <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={400}
        height={400}
        alt={`Imagem do Pokemon ${pokemon.name}`}
        className="w-56 md:w-80"
      />
    </div>
    </>
  )
};

export default Sobre;