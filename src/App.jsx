import { Route, Routes } from "react-router-dom";
import HomePage from "./WEB-PAGES/HomePage";
import Navigation from "./WEB-COMPONENTS/NAVIGATION/Navigation";
import ProductPage from "./WEB-PAGES/ProductPage";
import ContactPage from "./WEB-PAGES/ContactPage";
import Details from "./DETAILS-PAGE/Details";
import Footer from "./FOOTER-COMPONENT/Footer";
import Cart from "./CART-PAGE/Cart";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductPage" element={<ProductPage/>} />
          <Route path="/ContactPage" element={<ContactPage/>} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
