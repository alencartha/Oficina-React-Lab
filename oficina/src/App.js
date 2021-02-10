import './App.css';
import React, { useState, useEffect } from 'react';



const App=() =>{

  const [pokemons, setPokemon] = useState([]);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/type/5')
    .then(result => result.json())
    .then(result =>{
      setPokemon(result.pokemon)
    })
  },[])


  return (
    <div className="App">
    {
      pokemons.map((item, indice) => {
      return ( 
        <p key={indice}>{item.pokemon.name}</p>
      )
    })
  }
    </div>
  );
}

export default App;
