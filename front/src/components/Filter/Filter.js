import React from 'react'
import "../../css/Filter/Filter.css";
import Fade from 'react-reveal/Fade';
function Filter(props) {


    return (
        <Fade right cascade>
            <div className='filter-container'>
                <h3 className='filter-title'>Filter</h3>

                <div className='filter-size-container'>
                    <p className='filter-size-count'>Num of Products {props.count}</p>

                    <p className='filter-size-title'>Size Filter</p>
                    <select value={props.size} className='filter-size-select' onChange={props.handleFitlerBySize}>
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
                    <select value={props.order} className='filter-order-select' onChange={props.handleFitlerByOrder}>
                        <option value="latest">Latest</option>
                        <option value="highest">Highest</option>
                        <option value="lowest">Lowest</option>
                    </select>
                </div>
            </div>
        </Fade>
    )
}
export default Filter;