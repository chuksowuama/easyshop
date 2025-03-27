import { Route, Routes } from "react-router-dom";
import HomePage from "./WEB-PAGES/HomePage";
import Navigation from "./WEB-COMPONENTS/NAVIGATION/Navigation";
import ProductPage from "./WEB-PAGES/ProductPage";
import ContactPage from "./WEB-PAGES/ContactPage";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductPage" element={<ProductPage/>} />
          <Route path="/ContactPage" element={<ContactPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
