export async function pokemonTypes() {

  const res = await fetch("https://pokeapi.co/api/v2/type")
  const data = await res.json()

  console.log(data.results);
  

  return {
    props: {
      types: data.results,
    },
  }
}

pokemonTypes();


const FilterType = (props) => {

  return (
    <>
    <div className="ml-11 my-8 flex content-center">
      {/* <div>{types.map((item) => ())}</div> */}
      <button type="button" onClick={(a) => console.log(props.types)
      }>oiio</button>
    </div>
    </>
  );
};

export default FilterType;