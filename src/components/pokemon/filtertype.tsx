const FilterType = () => {
  const types = [
    {name: "normal"},{name: "fire"},{name: "water"},{name: "electric"},{name: "grass"},{name: "ice"},
    {name: "fighting"},{name: "poison"},{name: "ground"},{name: "flying"},{name: "psychic"},{name: "bug"},
    {name: "rock"},{name: "ghost"},{name: "dragon"},{name: "dark"},{name: "steel"},{name: "fairy"},
  ]
  return (
    <>
      <div>
        <ol>
         {types.map((item, id) => (<li onClick={(a) => console.log(item.name)} key={id} className={`type_${item.name} text-black`}>
          {item.name}
         </li>))}
        </ol>
      </div>
    </>
  );
};

export default FilterType;