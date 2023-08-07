import React, {useState} from "react";


// const search = (value) => {
//   if (value === '') {
//     console.log('nada aqui');
//   } if (value !== '') {
//     console.log(value);
//   }

//   poke = poke.filter((item) => 
//     item.name.toLowerCase().includes(value.toLowerCase())
//   )
// };

const IndexSearch = () => {
  
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=251")
    .then((response) => response.json())
    .then((json) => {
      const result = json.results.filter((item) => 
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      // console.log(result);
      
     })
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
    <div className={`${"divSearch"} ml-11 my-8 flex content-center`}>
        <input
          type="search"
          placeholder="Buscar Pokemon ..."
          className="flex text-black rounded p-1"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default IndexSearch;