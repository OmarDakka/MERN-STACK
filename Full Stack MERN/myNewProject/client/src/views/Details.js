import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "@reach/router";
export default props => {
    const [person, setPerson] = useState({})
    useEffect(() =>{
        axios.get("http://localhost:8000/api/people/"+props.id)
            .then(res => setPerson(res.data))
            .catch(err => console.log(err))   
    }, [])
    console.log(person);
    return (
        <div>
            <p>First name: {person.firstName}</p>
            <p>Last name: {person.lastName}</p>
            <Link to={"/people/" + person._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}