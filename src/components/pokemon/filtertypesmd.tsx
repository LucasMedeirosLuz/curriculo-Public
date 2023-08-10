const FilterTypemd = () => {
  const types = [ {name: "All", id: 0},
    {name: "Normal", id: 1},{name: "Fire", id: 10},{name: "Water", id: 11},{name: "Electric", id: 13},{name: "Grass", id: 12},{name: "Ice", id: 15},
    {name: "Fighting", id: 2},{name: "Poison", id: 4},{name: "Ground", id: 5},{name: "Flying", id: 3},{name: "Psychic", id: 14},{name: "Bug", id: 7},
    {name: "Rock", id: 6},{name: "Ghost", id: 8},{name: "Dragon", id: 16},{name: "Dark", id: 17},{name: "Steel", id: 9},{name: "Fairy", id: 18},
  ]
  return (
    <div 
      className="max-md:hidden"
    >
    <div className="flex justify-center flex-wrap content-center">
      {types.map((item, id) => (<button key={id}
      className={`type_${item.name} flex text-black rounded-lg p-1 justify-center m-1`}>
      {item.name}
      </button>))}
    </div>
    </div>
  );
};

export default FilterTypemd;