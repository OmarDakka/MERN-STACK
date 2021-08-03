import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [authors])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    const styles = {
        table : {
            fontFamily: "arial, sans-serif", borderCollapse: "collapse", width: "15%"
          },
        td :  {
            border: "1px solid #dddddd",
            textAlign: "left",
            padding: "8px"
          },

          th:  {
            border: "1px solid #dddddd",
            textAlign: "left",
            padding: "8px"
          },
          
        tr:  {
            backgroundColor: "#dddddd"
        }
    }
    return (
        <div>
            <center>
            <table style={styles.table}>
                    <tr style={styles.tr}>
                        <th style={styles.th}>Author</th>
                        <th style={styles.th}>Actions Available</th>
                    </tr>
            <tbody>
            {props.authors.map((author,idx) => {
                    return( <tr key={idx} style={styles.tr}>
                        <td style={styles.td}>
                            <Link to={"/authors/" + author._id}>
                                {author.name}
                            </Link>
                        </td>
                        <td style={styles.td}>
                            <Link to={"/authors/" + author._id + "/edit"}>
                                <button type="submit" value="Edit">Edit</button>
                            </Link>
                            |
                            <DeleteButton authorId={author._id} successCallback = {() => removeFromDom(author._id)} />
                        </td>
                    </tr>
                    )
                })}
                </tbody>
                </table>
            </center>   
        </div>
    )
   
}