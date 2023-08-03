import Image from "next/image";

const Card = ({pokemon}) => {
  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={100}
        height={100}
        alt={`Imagem do Pokemon ${pokemon.name}`}
      />
      <h3>{pokemon.name}</h3>
    </div>
  )
};

export default Card;