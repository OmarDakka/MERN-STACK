import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'; 
import DeleteButton from './DeleteButton';
export default props => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProducts(res.data));
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    return (
        <div>
            {props.products.map((product,idx)=>{
                return <p key={idx}>
                    <Link to={"/products/" + product._id}>
                        {product.title}
                    </Link> 
                    |
                    <Link to={"/products/" + product._id + "/edit"}>
                        Edit
                    </Link>
                    |
                    <DeleteButton productId={product._id} successCallback = {() => removeFromDom(product._id)} /> 
                    </p>
            })}
        </div>
    )
}