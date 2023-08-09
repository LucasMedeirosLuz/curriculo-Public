import { TypeIcon } from "../icons/typesmenu";

const FilterType = () => {
  const types = [
    {name: "normal", id: 1},{name: "fire", id: 10},{name: "water", id: 11},{name: "electric", id: 13},{name: "grass", id: 12},{name: "ice", id: 15},
    {name: "fighting", id: 2},{name: "poison", id: 4},{name: "ground", id: 5},{name: "flying", id: 3},{name: "psychic", id: 14},{name: "bug", id: 7},
    {name: "rock", id: 6},{name: "ghost", id: 8},{name: "dragon", id: 16},{name: "dark", id: 17},{name: "steel", id: 9},{name: "fairy", id: 18},
  ]
  return (
    <>
    <div>
      <button>
        <TypeIcon className="" />
      </button>
    </div>
    <div className="flex justify-center flex-wrap">
      {types.map((item, id) => (<button key={id}
      className={`type_${item.name} flex text-black rounded-lg p-1 justify-center m-1`}>
      {item.name}
      </button>))}
    </div>
    </>
  );
};

export default FilterType;