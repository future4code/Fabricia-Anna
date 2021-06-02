import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokeCard from './component/PokeCard';



const PokeApp = () => {
  const [pokeList, setPokeList] = useState ([]);
  const [pokeName, setPokeName] = useState ("");

  const pokenUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

 
   const getPokerList = () => {
     axios
     .get(pokenUrl)
     .then (res => {setPokeList (res.data.results)})
     .catch (err => {console.log (err)});
   }

   useEffect (() => {
     getPokerList ()
   }, [])

   const changePokeName = event => {
     setPokeName (event.target.value)
   };
   

return (
  <div className="PokeApp">
    <select onChange ={changePokeName}>
    <option value={""}>Nehum</option>

    {pokeList.map (pokemon => {
      return (
        <option key={pokemon.name} value={pokemon.name}>
          {pokemon.name}
        </option>
      );
    })}
    </select>
    {pokeName&& <PokeCard pokemon={pokeName}/>}
  </div>
)
};

export default PokeApp;
