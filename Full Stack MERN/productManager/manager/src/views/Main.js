import React,{useEffect,useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [product,setProducts] = useState([]);
    const [loaded,setLoaded] = useState(false);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    }, []) 
    return (
        <div>
            <ProductForm/>
            <hr/>
             <ProductList products={product}/>
        </div>
    )
}