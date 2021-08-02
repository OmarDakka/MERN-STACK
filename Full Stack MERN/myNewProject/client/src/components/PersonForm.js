import React, { useState } from 'react';
import axios from 'axios';
export default props => {
    const { initialFirstName, initialLastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName,lastName});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
            </p>
            <input type="submit" value="Submit"/>
        </form>
    )
}