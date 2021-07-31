import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'
export default props => {
    const [product,setProduct] = useState({})
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+props.id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [product])
    console.log(product);
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id +"/edit"}>
                Edit
            </Link>
            |
            <button onClick={(e) => {deleteProduct(product._id)}}>
                Delete
            </button>
            <br/>
            <br/>
            <br/>
            <Link to={"/products"}>Home</Link>
        </div>
    )
}