import Image from "next/image";
import Link from "next/link";

const Card = ({pokemon}) => {
  return (
    <div className="card">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={110}
        height={110}
        alt={`Imagem do Pokemon ${pokemon.name}`}
        className="imagepokemon"
      />
      <p># {pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link
        href={`/pokemon/${pokemon.id}`}
      >
        <p>Sobre</p>
      </Link>
    </div>
  )
};

export default Card;