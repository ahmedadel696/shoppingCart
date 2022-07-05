//import "./css/index.css"

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { data } from "./products_json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import { useState } from "react";
function App() {

  const [products, setProducts] = useState(data);
  const [sizeFilter, setSizeFilter] = useState("");
  const [orderFilter, setOrderFilter] = useState("");

  const handleFitlerBySize = (e) => {
    console.log(e.target.value);
    setSizeFilter(e.target.value);

    if (e.target.value === "All") {
      setProducts(data);
    } else {
      let ProductsClone = [...data];
      let newProductsClone = ProductsClone.filter(p => p.sizes.indexOf(e.target.value) !== -1);
      setProducts(newProductsClone);
    }
  }

  const handleFitlerByOrder = (e) => {
    console.log(e.target.value);
    setOrderFilter(e.target.value);

    let ProductsClone = [...products];
    let newProductsClone = ProductsClone.sort(function(a,b){
      if(e.target.value === "lowest"){
        return a.price - b.price;
      }else if(e.target.value === "highest"){
        return b.price - a.price;
      }else{
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProductsClone);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <div className="mainContainer">
          <div className="productsContainer">
            <Products products={products} />
          </div>
          <div className="filterContainer">
            <Filter handleFitlerBySize={handleFitlerBySize} handleFitlerByOrder={handleFitlerByOrder} size={sizeFilter} order={orderFilter} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
