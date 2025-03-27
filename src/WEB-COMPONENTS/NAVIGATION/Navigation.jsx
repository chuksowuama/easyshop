import React, { useEffect, useState } from "react";
import "./Navigation.css";
import logo from "../../assets/EasyShopLogo.png";
import Homeicon from "../../assets/homeIcon.png";
import { Link } from "react-router-dom";
import NavSearch from "../Nav-SearchComponent/NavSearch";
import SignUpForm from "../SIGNUP-FORM/SignUpForm";

const Navigation = () => {
  const [active, setactive] = useState(0);
  const [ShowSearchArea,setShowSearchArea]=useState(false)
  const [Showsignup,setShowSignup]=useState(false)
  const[ShowNav,setShowNav]=useState(false)

  return (
    <>
      <nav>
        <Link to={"/"} className="Link">
        <div className="logo" onClick={() => setactive(0)}>
          <img src={logo} alt="" />
          <h2>
            Easy<span>Shop</span>
          </h2>
        </div>
        </Link>
        <ul className={`navMenu ${ShowNav?"nav-active":""}`}>
        <i class="fa-solid fa-xmark" onClick={()=>setShowNav(false)} id="closeMenu"></i> 
          <Link to={"/"} className="Link">
            <li className="Homemen" onClick={() => setactive(0)}>
              <img src={Homeicon} alt="" />
              Home
            </li>
          </Link>
          <Link to={"/ProductPage"} className="Link">
            <li onClick={() => setactive(40)}>Products</li>
          </Link>
          <Link to={"/ContactPage"} className="Link">
            {" "}
            <li onClick={() => setactive(82)}>Contacts</li>
          </Link>
          <div className="underline" style={{ left: `${active}%` }}></div>
        </ul>
        <div className="search-Login">
            <i class="fa-solid fa-magnifying-glass" onClick={()=>setShowSearchArea(!ShowSearchArea)}></i>
            {ShowSearchArea && <NavSearch/>}
          <button onClick={()=>setShowSignup(!Showsignup)}>SignUp</button>
          {Showsignup && <SignUpForm/>}
          <i class="fa-solid fa-bars" onClick={()=>setShowNav(true)} id="menubar"></i>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
