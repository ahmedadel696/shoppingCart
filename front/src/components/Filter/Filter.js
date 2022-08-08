import React from 'react'
import "../../css/Filter/Filter.css";
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import { filterProductsByOrder, filterProductsBySize } from './../../store/actions/products';
function Filter(props) {

    return (
        <Fade right cascade>
            {props.filterProducts && <div className='filter-container'>
                <h3 className='filter-title'>Filter</h3>

                <div className='filter-size-container'>
                    <p className='filter-size-count'>Num of Products 3</p>

                    <p className='filter-size-title'>Size Filter</p>
                    <select value={props.size} className='filter-size-select' onChange={(e) => props.filterProductsBySize(props.filterProducts, e.target.value)}>
                        <option value="All">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>
                    </select>
                </div>

                <div className='filter-order-container'>
                    <p className='filter-order-title'>Order Filter</p>
                    <select value={props.order} className='filter-order-select' onChange={(e) => props.filterProductsByOrder(props.filterProducts, e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="highest">Highest</option>
                        <option value="lowest">Lowest</option>
                    </select>
                </div>
            </div>}
        </Fade>
    )
}
export default connect(
    (state) => {
        return {
            filterProducts: state.products.filterProducts,
            size: state.products.size,
            order: state.products.order,
            products: state.products.products
        }
    }
    , { filterProductsByOrder, filterProductsBySize })(Filter);