import React, { useState } from 'react'
import "../../css/Products/Products.css"
import ProductModal from './ProductModal';

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

    return (
        <div className='product_container'>

            {producst.map((product, i) =>
            (
                <div className='product_item' key={i}>
                    <a href='#' onClick={() => openModal(product)}>
                        <img onClick={()=>openModal(product)} className='product_image' src={require(`../../images/${product.imageUrl}`)} />

                    </a>
                    <div className='productPriceDesc'>
                        <p>{product.name}</p>
                        <span>{product.price}</span>
                    </div>
                    <button onClick={()=>props.addToCart(product)} className='product_btn'>Add To Cart</button>
                </div>

            )



            )}

            <ProductModal  isOpenObj={product} onRequestCloseFunc={closeModal}/>





        </div>

    )


}
export default Products;