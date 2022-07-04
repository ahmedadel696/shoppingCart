//import "./css/index.css"

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { statics } from "./static";
import { data } from "./products_json"; 
import Products from "./components/Products/Products";
function App() {
  //console.log(data)
  return (
    <div className="container">
      <Header />
      <main>
        <div className="mainContainer">
          <div className="productsContainer">
            <Products products={data} />
          </div>
          <div className="filterContainer">
            Filter
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
