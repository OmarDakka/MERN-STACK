import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

export default() => {
    const [author,setAuthor] = useState([]);
    const [errors,setErrors] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => navigate("/authors"))
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
           
    }
    

    return (
        <div>
            {errors.map((err,index) =><p key={index}>{err}</p>)}
            <AuthorForm onSubmitProp={createAuthor} initialName="" />
        </div>
    )
}
