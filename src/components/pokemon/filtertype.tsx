import { TypeIcon } from "../icons/typesmenu";
import React, {useState} from "react";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
  setTypeButton: (item) => void;
};

const FilterType = ({isVisible, onClose, setTypeButton}: MenuProps) => {

  const types = [ {name: "All", id: 0},
    {name: "Normal", id: 1},{name: "Fire", id: 10},{name: "Water", id: 11},{name: "Electric", id: 13},{name: "Grass", id: 12},{name: "Ice", id: 15},
    {name: "Fighting", id: 2},{name: "Poison", id: 4},{name: "Ground", id: 5},{name: "Flying", id: 3},{name: "Psychic", id: 14},{name: "Bug", id: 7},
    {name: "Rock", id: 6},{name: "Ghost", id: 8},{name: "Dragon", id: 16},{name: "Dark", id: 17},{name: "Steel", id: 9},{name: "Fairy", id: 18},
  ];

  const handleChangebt = (value) => {
    setTypeButton(value);
  };


  return (
    <div className={`${isVisible ? 'flex' : 'hidden'}
      fixed absolute inset-0 w-full h-full mt-[71px] md:hidden
     `}
    >
    <div className="w-full bg-l-blue-5 h-56 shadow-md py-4 px-5">
      <button onClick={onClose}>
        <TypeIcon />
      </button>
    <div className="flex justify-center flex-wrap content-center">
      {types.map((item, id) => (<button key={id} onClick={(e) => handleChangebt(item.id)}
      className={`type_${item.name} flex text-black rounded-lg p-1 justify-center m-1`}>
      {item.name}
      </button>))}
    </div>
    </div>
    </div>
  );
};

export default FilterType;