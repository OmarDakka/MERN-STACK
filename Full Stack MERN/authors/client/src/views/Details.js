import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const [author,setAuthor] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/"+props.id)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }, [author])
    console.log(author);

    return(
        <>
        <h1>Author</h1>
        <div>
            <h2>Name: {author.name}</h2>
            <Link to={"/authors/" + author._id + "/edit"}>
                <button>Edit</button>
            </Link>
            <DeleteButton authorId={author._id} successCallback = {() => navigate("/authors")} />
            <br/>
            <br/>
            <br/>
            <Link to={"/authors"}><button>Home</button></Link>
        </div>
        </>
    )
}