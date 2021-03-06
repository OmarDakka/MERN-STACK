import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Luke = e => {
    const [type,setType] = useState("people");
    const [id,setId] = useState();
    const [result,setResult] = useState({});
    const url = "https://swapi.dev/api/" + type + "/" + id;

    const GetData = e =>
    {
        e.preventDefault();
        axios.get(url)
        .then(res => {
            console.log(type)
            console.log(id)
            setResult(res.data)
            console.log(res.data)
            
        })
        .catch(err => console.log(err));
    }

    return (
        <>
        <div>
            <h1>Luke APIWalker</h1>
                <div>
                    <form onSubmit={GetData}>
                        <div>
                            <p>
                                <select onChange={e => setType(e.target.value)}>
                                    <option value="people">People</option>
                                    <option value="films">Films</option>
                                    <option value="starships">Starships</option>
                                    <option value="species">Species</option>
                                    <option value="planets">Planets</option>
                                </select>
                            </p>
                        </div>
                        <div>
                            <p>
                                Id: <input onChange={e => setId(e.target.value)} type="number"/>
                            </p>
                                <input type="submit" value="Search"/>
                        </div>
                    </form>
                </div>
                <div>
                    {
                        type === "people" ?
                        <div>
                            <p>Name: {result.name}</p>
                            <p>Height: {result.height}</p>
                            <p>Mass: {result.mass} </p>
                            <p>Hair Color: {result.hair_color}</p>
                            <p>Skin Color: {result.skin_color}</p>
                            <p>Eye Color: {result.eye_color}</p>
                            <p>Birth Year: {result.birth_year}</p>
                            <p>Gender: {result.gender}</p>
                            <p>Home World:</p>
                            <p>Films:</p>
                            <p>Species:</p>

                        </div>
                        :""
                    }
                    {
                        type === "films" ?
                        <div>
                            <p>Title: {result.title}</p>
                            <p>Episode ID: {result.episode_id}</p>
                            <p>Opening: {result.opening_crawl}</p>
                            <p>Director: {result.director}</p>
                            <p>Producer: {result.producer}</p>
                            <p>Release Date: {result.release_date}</p>
                        </div>
                    :""
                    }
                    {
                        type === "starships"?
                        <div>
                            <p>Name: {result.name}</p>
                            <p>Model: {result.model}</p>
                            <p>Manufacturer: {result.manufacturer}</p>
                            <p>Cost: {result.cost_in_credits}</p>
                            <p>Length: {result.length}</p>
                            <p>Max Atmosphering Speed: {result.max_atmosphering_speed}</p>
                            <p>Crew: {result.crew}</p>
                            <p>Passengers: {result.passengers}</p>
                            <p>Cargo Capacity: {result.cargo_capacity}</p>
                            <p>Consumables: {result.consumables}</p>
                            <p>Hyperdrive Rating: {result.hyperdrive_rating}</p>
                            <p>MGLT: {result.MGLT}</p>
                            <p>Class: {result.starship_class}</p>
                            <p>Pilots: {result.pilots}</p>
                            <p>Films: </p>
                        </div>
                        :""
                    }
                    {
                        type === "species" ?
                        <div>
                            <p>Name: {result.name}</p>
                            <p>Classification: {result.classification}</p>
                            <p>Designation: {result.designation} </p>
                            <p>Average Height: {result.average_height}</p>
                            <p>Skin Colors: {result.skin_colors}</p>
                            <p>Hair Colors: {result.hair_colors}</p>
                            <p>Eye Colors: {result.eye_colors} </p>
                            <p>Average Lifespan: {result.average_lifespan} </p>
                            <p>Homeworld:  </p>
                            <p>Language: {result.language} </p>
                            <p>People:  </p>
                            <p>Films:  </p>
                            <p>Created: {result.created} </p>
                        </div>
                        :""
                    }
                    {
                         type === "planets" ?
                         <div>
                            <p>Name: {result.name}</p>
                            <p>Rotation Peroid: {result.rotation_period}</p>
                            <p>Oribital Period: {result.oribital_period} </p>
                            <p>Diameter: {result.diameter}</p>
                            <p>Climate: {result.climate}</p>
                            <p>Gravity: {result.gravity}</p>
                            <p>Terrain: {result.terrain} </p>
                            <p>Surface Water: {result.surface_water} </p>
                            <p>Population: {result.population}  </p>
                            <p>Residents: {result.residents} </p>
                            <p>Films:  </p>
                         </div>
                        :""
                    }
                </div>
        </div>
        </>
    );
}

export default Luke;