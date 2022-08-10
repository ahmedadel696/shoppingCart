import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import { Provider } from 'react-redux';
import store from "./store/store";
import { BrowserRouter, NavLink ,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./components/Navbar/Navbar";
import OrdersPage from "./pages/OrdersPage";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container">
          <Header />
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/orders" element={<OrdersPage />} exact />

            </Routes>

          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
