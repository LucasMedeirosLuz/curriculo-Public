import Image from "next/image";
import Link from "next/link";

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

const Sobre = ({pokemon}) => {
  return (
    <>
    <div className="flex justify-center content-center text-3xl md:text-5xl my-12 capitalize">
      <h1>{`${pokemon.name}`}</h1>
    </div>
    <div className="flex justify-center content-center">
    <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width={400}
        height={400}
        alt={`Imagem do Pokemon ${pokemon.name}`}
        className="w-56 md:w-80 mb-12"
      />
    </div>
    <div className="flex flex-col justify-start mx-[28%] md:mx-[39%] p-5 relative">
    <div className="flex bg-l-blue-1 text-black text-2xl rounded-md p-1 absolute top-[-25px] left-[0px]">
      <h3># {pokemon.id}</h3>
    </div>
    <div className="flex mb-2">
      <h3 className="mr-1">Tipo:</h3>
      <div>
        {pokemon.types.map((item, index) => (
          <span className={`type_${item.type.name} type font-bold`} key={index}>{item.type.name}</span>
        ))}
      </div>
    </div>
    <div>
      <div className="flex mb-2">
        <h4>Altura:</h4>
        <p className="px-2">{pokemon.height * 10} cm</p>
      </div>
      <div className="flex">
        <h4>Peso:</h4>
        <p className="px-2">{pokemon.weight / 10} kg</p>
      </div>
    </div>
    </div>
    <div className="bg-l-blue-1 text-black text-center mx-[41%] md:mx-[45%]">
      <Link href={`/projetos/pokemon`}>
      <p>Voltar</p>
      </Link>
    </div>
    </>
  )
};

export default Sobre;