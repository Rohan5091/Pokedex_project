import "./pokemons.css"

const Pokemons=function ({image,name}) {
    return (
        <>
       <div className="pokemons">
           <h2>{name}</h2>
           <img src={image}></img>
       </div>
        </>
    )
  
}

export default Pokemons;