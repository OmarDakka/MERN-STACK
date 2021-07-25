import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);

        const onClick = (e) => {
            axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
            .then(res => {setPoke(res.data.results);
            })
            .catch(err => console.log(err));
        };

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