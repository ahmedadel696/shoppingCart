import React from 'react'
import "../../css/Products/Products.css"
function Products(props) {
    console.log(props.products)
    const producst = props.products;
    return (
        <div className='product_container'>

            {producst.map(function (product, i) {
                return (
                    <div className='product_item' key={i}>
                        <img className='product_image' src={require(`../../images/${product.imageUrl}`)} />
                        <div className='productPriceDesc'>
                            <p>{product.name}</p>
                            <span>{product.price}</span>
                        </div>
                        <button className='product_btn'>Add To Cart</button>
                    </div>

                )

            })}
            
        </div>

    )


}
export default Products;