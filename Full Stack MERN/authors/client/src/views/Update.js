import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const {id} = props;
    const [author,setAuthor] = useState('');
    const [loaded,setLoaded] = useState(false);
    const [errors,setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+ id)
            .then( res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/'+id,author)
            .then(res => navigate("/authors"))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(errorArr);
            })
            
    }
    return (
        <div>
            <h1>Update an Author</h1>
            {errors.map((err,index) =><p key={index}>{err}</p>)}
            <AuthorForm
                onSubmitProp={updateAuthor}
                initialName={author.name}
            />
            <DeleteButton authorId={author._id} successCallback = {() => navigate("/authors")} />
        </div>
    )
}