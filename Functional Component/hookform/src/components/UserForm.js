import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName (e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First name must be 3 characters or longer!");
        }
        else
         setFirstNameError("");
    }
    
    const handleLastName = (e) => {
        setLastName (e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if (e.target.value.length < 3) {
            setLastNameError("Last name must be 3 characters or longer!");
        }
        else
        setLastNameError("");
    }

    const handleEmail  = (e) => {
        setEmail (e.target.value);
        if(e.target.value.length < 1 ){
            setEmailError("Email is required!");
        } else if (e.target.value.length < 10) {
            setEmailError("Email must be at least 10 characters or longer!");
        }
        else
        setEmailError("");
    }

    const handlePassword = (e) => {
        setPassword (e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters or longer!");
        }
        else
        setPasswordError("");
    }

    const handlePasswordConfirmation = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("You must confirm your password!");
        } else if (e.target.value !== password){
            setConfirmPasswordError("The password doesnt match the password that you entered previously!");
        }
        else
        setConfirmPasswordError("");
    }

    const createUser = (e) => {
        e.preventDefault ();
        const newUser = {firstName,lastName,email,password};
    };

    return (
        <>
        <form onSubmit= { createUser } >
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName }/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName }/>
                {
                    lastNameError?
                    <p style={{color:'red'}}>{ lastNameError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ handleEmail} />
                {
                    emailError?
                    <p style={{color:'red'}}>{ emailError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError?
                    <p style={{color:'red'}}>{ passwordError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handlePasswordConfirmation } />
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p>:
                    ''
                }
            </div>
            <input type="submit" value="Create User"/>
        </form>
        <p>Your Form Data: </p><br></br>
        <p>First Name: { firstName}</p>
        <p>Last Name: { lastName }</p>
        <p>Email: { email }</p>
        <p>Password: { password }</p>
        <p>Confirm Password: { confirmPassword }</p>

        </>
    );
};


export default UserForm;