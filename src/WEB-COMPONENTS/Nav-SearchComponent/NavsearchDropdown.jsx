import React, { useContext } from "react";
import "./NavsearchDropdown.css";
import { Mycontext } from "../../UsecontextProvider";
import { Link } from "react-router-dom";

const NavsearchDropdown = ({ NavsearchDropdown,showfiltdropdown }) => {
  const { Details, AddtoDetails } = useContext(Mycontext);
  return (
    <ul className="navsearchDrop">
      {NavsearchDropdown && NavsearchDropdown.length
        ? NavsearchDropdown.map((item, index) => (
            <Link to={"/Details"} onClick={()=>showfiltdropdown(false)}>
              <li onClick={() => AddtoDetails(index)}>{item}</li>
            </Link>
          ))
        : null}
    </ul>
  );
};

export default NavsearchDropdown;
