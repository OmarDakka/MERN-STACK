import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router'; 
export default props => {
    return (
        <div>
            {props.products.map((product,idx)=>{
                return <Link to={"/products/" + product._id}><p key={idx}>{product.title}</p></Link>
            })}
        </div>
    )
}