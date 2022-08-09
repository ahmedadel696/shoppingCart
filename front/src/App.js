//import "./css/index.css"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { data } from "./products_json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import { Provider } from 'react-redux'
import store from "./store/store";
function App() {

  const [products, setProducts] = useState(data);
  const [sizeFilter, setSizeFilter] = useState("");
  const [orderFilter, setOrderFilter] = useState("");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

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
    let newProductsClone = ProductsClone.sort(function (a, b) {
      if (e.target.value === "lowest") {
        return a.price - b.price;
      } else if (e.target.value === "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProductsClone);
  }

  // const addToCart = (product) => {
  //   var isExist = false;
  //   var cartItemsClone = [...cartItems];
  //   var totalPrice = 0;
  //   cartItems.forEach(item => {
  //     if (item.id === product.id) {
  //       isExist = true;
  //       item.qty++;
  //       item.price = item.price * item.qty;
  //     }
  //   });

  //   if (!isExist) {
  //     cartItemsClone.push({ ...product, qty: 1 });
  //   }

  //   setCartItems(cartItemsClone)
  // }

  // const removeFromCart = (product) => {
  //   var cartItemsClone = [...cartItems];
  //   var cartItemsCloneFilter = cartItemsClone.filter(p => p.id != product.id);
  //   setCartItems(cartItemsCloneFilter);
  // }

  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);



  // const removeFromCart = (product) => {
  //   var cartItemsClone = [...cartItems];
  //   cartItemsClone.forEach(item => {
  //     if (item.id === product.id) {
  //       let productIndex = cartItemsClone.map(productItem => productItem.id).indexOf(item.id);
  //       cartItemsClone.splice(productIndex, 1);
  //       setCartItems(cartItemsClone);
  //     }
  //   });
  // }


  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <main>
          <div className="mainContainer">
            <div className="productsContainer">
              <Products/>
            </div>
            <div className="filterContainer">
              <Filter/>
            </div>
          </div>
          <Cart />
        </main>
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
