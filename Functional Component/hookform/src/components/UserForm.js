import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault ();
        const newUser = {firstName,lastName,email,password};
    };

    return (
        <>
        <form onSubmit= { createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={firstName}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ (e) => setEmail(e.target.value)} value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} value={ password } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)} value={ confirmPassword } />
            </div>
            <input type="submit" value="Create User"/>
        </form>
        <p>Your Form Data: </p><br></br>
        <p>First Name: { firstName }</p>
        <p>Last Name: { lastName }</p>
        <p>Email: { email }</p>
        <p>Password: { password }</p>
        <p>Confirm Password: { confirmPassword }</p>

        </>
    );
};


export default UserForm;