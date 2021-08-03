import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import AuthorList from '../components/AuthorList';

export default () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect (() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            });
    }, [author]);

    const removeFromDom = authorId => {
        setAuthor(author.filter(auth => auth._id != authorId));
    }

    
    return (
        <div>
            <h1>Favorite Authors</h1>
            <p>
                <Link to={"/authors/create"}>
                    Add an author
                </Link>
            </p>
            <p>
                We have quotes by: 
            </p>
            {loaded && <AuthorList authors={author} removeFromDom={removeFromDom} />}
        </div>
    )

}