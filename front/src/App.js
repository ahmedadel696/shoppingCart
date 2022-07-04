//import "./css/index.css"

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { statics } from "./static";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        {statics.content}
      </main>
      <Footer />
    </div>
  );
}

export default App;
