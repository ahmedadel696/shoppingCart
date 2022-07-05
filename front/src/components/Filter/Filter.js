import React from 'react'
import "../../css/Filter/Filter.css"
function Filter() {
    return (
        <div className='filter-container'>
            <h3 className='filter-title'>Filter</h3>
            <div className='filter-size-container'>
                <p className='filter-size-title'>Size Filter</p>
                <select className='filter-size-select'>
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
                <select className='filter-order-select'>
                    <option value="latest">Latest</option>
                    <option value="highest">Highest</option>
                    <option value="lowest">Lowest</option>
                </select>
            </div>
        </div>
    )
}
export default Filter;