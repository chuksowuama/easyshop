import React, { useContext } from "react";
import "./ProductsCard.css";
import { Mycontext } from "../UsecontextProvider";
import { Link } from "react-router-dom";
import Cart from "../CART-PAGE/Cart";
const ProductsCard = ({
  image,
  category,
  description,
  id,
  price,
  rating,
  title,
}) => {

  const {details, AddtoDetails,Cart,AddToCart,removeCart}=useContext(Mycontext)
  return (
    <>
    {
      <div className="products-Card">
      <div className="imageContainer">
        <img src={image} alt="" />
        {
          !Cart[id]?<span onClick={()=>AddToCart(id)} className="plusAdd"><i class="fa-solid fa-plus"></i></span>: 
          <div className="incrementBtns">
              <span onClick={()=>AddToCart(id)}><i class="fa-solid fa-plus"></i></span>
              {Cart[id]}
              <span onClick={()=>removeCart(id)}><i class="fa-solid fa-minus"></i></span>
          </div>
        }
      </div>
      <div className="infoContainer">
      <div className="Name-rating">
          <h4>{title}</h4>
          <p>rating {rating}</p>
        </div>
        <p className="price"><span>Price:</span>${price}</p>
        <p className="Prodcard-description">{description.length>0? description.slice(0,100)+"..." :description}</p>
        <div className="button">
        <Link to={"/Details"}>
        <button onClick={()=>AddtoDetails(id)}>Details</button>
        </Link>
        </div>
      </div>
    </div> 
    }
    </>
  );
};

export default ProductsCard;
