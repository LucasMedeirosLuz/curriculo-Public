import Image from "next/image";
import Link from "next/link";

const Card = ({pokemon}) => {
  return (
    <div className={`${"card"} text-md relative`}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={110}
        height={110}
        alt={`Imagem do Pokemon ${pokemon.name}`}
        className="imagepokemon"
      />
      <p className="flex bg-l-blue-4 rounded-full p-1 absolute bottom-[3.4rem]"># {pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link
        href={`/projetos/pokemon/${pokemon.id}`}
        className="buttonpokemon"
      >
        <p>Sobre</p>
      </Link>
    </div>
  )
};

export default Card;