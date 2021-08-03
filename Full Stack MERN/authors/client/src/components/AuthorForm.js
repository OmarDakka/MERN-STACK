import React, { useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {navigate} from '@reach/router';
export default (props) => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState("");
    const [errors,setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
    

    return (
        <>
        <h1>Add Your Favorite Author</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e) => setName(e.target.value)} initialName={""}/>
            </p>
            <Link to={"/authors"}><button>Cancel</button></Link>
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}