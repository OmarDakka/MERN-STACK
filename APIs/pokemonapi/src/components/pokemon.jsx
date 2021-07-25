import React, { useState } from 'react';


const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);

    const onClick = (e) => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
        .then(res => {
            return res.json();
        })
        .then(res =>{
            setPoke(res.results);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <div>
            <button onClick={onClick}>Fetch Pokemon</button>
            {poke.map((pok,i) =>(
                <li key={i}>{pok.name} </li>
            ))}
        </div>
    );
}

export default Pokemon;