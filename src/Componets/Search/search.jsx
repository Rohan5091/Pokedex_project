import { useState } from "react";
import "./search.css"
import useDebounce from "../../Hooks/useDebounce";
 const Searchresult=function ({updateSearchTerm}) {
      const delayedSerchTerm=useDebounce((e)=> updateSearchTerm(e.target.value))
      return(
          <div className="pokediv">
              <input 
              type="text" 
              placeholder="Search Pokemons...."
              onChange={delayedSerchTerm} 
              />
          </div> 

      )
 }

 export default Searchresult;