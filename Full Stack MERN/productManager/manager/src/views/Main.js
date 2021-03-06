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
    }, []);
    
    const removeFromDom = productId => {
        setProducts(product.filter(product => product._id != productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                setProducts([...product, res.data]);
            })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr/>
             {loaded &&<ProductList products={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}