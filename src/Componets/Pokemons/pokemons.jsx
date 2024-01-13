

const Pokemons=function ({image,name}) {
    return (
       <div>
           <h2>{name}</h2>
           <img src={image}></img>
       </div>
    )
  
}

export default Pokemons;