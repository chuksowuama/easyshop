import React, { useContext, useEffect, useState } from "react";
import "./Nav-Search.css";
import { Mycontext } from "../../UsecontextProvider";
import NavsearchDropdown from "./NavsearchDropdown";

const NavSearch = ({onClicks}) => {
  const { products } = useContext(Mycontext);
  const [SearchValue, setSearchValue] = useState("");
  const [productSearch, setProductSearch] = useState([]);
  const [filteredata, setfiltereddata] = useState([]);
  const [showfiltdropdown, setshowfilteredata]= useState(false);

  function handlechange(e) {
    const query = e.target.value;
    setSearchValue(query);
    if (query.length > 1) {
      const filteredproducts =
        productSearch &&
        productSearch.length &&
        productSearch.filter((filtprod,index) =>
          filtprod.toLowerCase().includes(query.toLowerCase())
        );
      setfiltereddata(filteredproducts);
      console.log(filteredproducts)
      setshowfilteredata(true)
    }else{
      setfiltereddata([])
      
    }
  }

  function searchProducts() {
    setProductSearch(
      products &&
        products.length &&
        products.map((proditem, idex) => proditem.title)
    )
  }

  useEffect(() => {
    searchProducts();
  }, []);
  return (
    <>
      <div className="search-Container">
        <div className="SearchArea">
          <input
            type="text"
            name=""
            id=""
            value={SearchValue}
            onChange={handlechange}
          />
        </div>
        <span className="removenavsearch" onClick={onClicks}><i class="fa-solid fa-xmark"></i></span>
        {showfiltdropdown && (
          <NavsearchDropdown NavsearchDropdown={filteredata} showfiltdropdown={showfiltdropdown} />
        )}
      </div>
    </>
  );
};

export default NavSearch;
