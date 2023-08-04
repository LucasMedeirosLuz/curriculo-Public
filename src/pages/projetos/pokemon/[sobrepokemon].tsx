export const getStaticPaths = async() => {

  const maxPokemon = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxPokemon}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {pokemonId: (index + 1).toString()},
    }
  });

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async(context) => {

  const id = context.patams.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  
  
};

const Sobre = (pokemon) => {
  return (
    <h1>{`Sobre ${pokemon.id}`}</h1>
  )
};

export default Sobre;