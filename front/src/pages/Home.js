import React from 'react'
import Cart from '../components/Cart/Cart'
import Filter from '../components/Filter/Filter'
import Products from '../components/Products/Products'

export default function Home() {
    return (
        <>
            <div className="mainContainer">
                <div className="productsContainer">
                    <Products />
                </div>
                <div className="filterContainer">
                    <Filter />
                </div>
            </div>
            <Cart />
        </>
    )
}
