import React, { useState,useEffect } from 'react'
import "../../css/Products/Products.css"
import ProductModal from './ProductModal';
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux';
import {fetchProducts} from '../../store/actions/products';


function Products(props) {
    //console.log(props.products)
    const producst = props.products;
    const [product, setProduct] = useState("");

    const openModal = (product) => {
        setProduct(product);
    }

    const closeModal = () => {
        setProduct(false);
    }

    useEffect(() => {
        props.fetchProducts();
    }, []);

    return (
        <Bounce left cascade>
            <div className='product_container'>
                {props.products && props.products.length ? props.products.map((product, i) =>
                (
                    <div className='product_item' key={i}>
                        <a href='#' onClick={() => openModal(product)}>
                            <img onClick={() => openModal(product)} className='product_image' src={require(`../../images/${product.imageUrl}`)} />

                        </a>
                        <div className='productPriceDesc'>
                            <p>{product.name}</p>
                            <span>{product.price}</span>
                        </div>
                        <button onClick={() => props.addToCart(product)} className='product_btn'>Add To Cart</button>
                    </div>

                )



                ): "Loading..."}
                <ProductModal isOpenObj={product} onRequestCloseFunc={closeModal} />
            </div>
        </Bounce>
    )


}
export default connect((state)=>{
    return{
        producst : state.products.products
    }
},{fetchProducts})(Products);