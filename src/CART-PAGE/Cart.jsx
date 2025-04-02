import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Mycontext } from "../UsecontextProvider";
import { featuredProducts } from "../AlldataAssest";

const Cart = () => {
  const { products, Cart, AddToCart, removeCart,getTotalamountIncart } = useContext(Mycontext);
  const[totalAmount,setTotalAmount]=useState(0)

  useEffect(()=>{
    const amount=getTotalamountIncart()
    setTotalAmount(Number(amount))
  },[Cart])
  
  return (
    <>
      <div className="Cart-container">
        <div className="cart-Item">
          <ul className="cart-Itemtitle headcols">
            <li>Item</li>
            <li>title</li>
            <li>price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
          <hr /> <br />
           {products &&
            products.map((prodtems, index) => {
              if (Cart[prodtems.id]) {
                return (
                  <ul className="cart-Itemtitle headrows">
                    <li>
                      <img src={prodtems.image} alt="" />
                    </li>
                    <li>{prodtems.title}</li>
                    <li>{prodtems.price}</li>
                    <li>{Cart[prodtems.id]}</li>
                    <li>{prodtems.price * Cart[prodtems.id]}</li>
                    <li onClick={()=>removeCart(prodtems.id)} className="removeCart">
                      <i class="fa-solid fa-xmark"></i>
                    </li>
                  </ul>
                );
              }
            })}
            {
               featuredProducts&&featuredProducts.map((featitem,index)=>{
                if(Cart[featitem.id]){
                  return(
                    <ul className="cart-Itemtitle headrows">
                    <li>
                      <img src={featitem.image} alt="" />
                    </li>
                    <li>{featitem.Name}</li>
                    <li>{featitem.price}</li>
                    <li>{Cart[featitem.Name]}</li>
                    <li>{featitem.price * Cart[featitem.id]}</li>
                    <li onClick={()=>removeCart(featitem.id)} className="removeCart">
                      <i class="fa-solid fa-xmark"></i>
                    </li>
                  </ul>
                  )
                }
               })
            }
        </div>
        <div className="cartItem-bottom">
            <div className="cart-Total">
            <ul className="cart-Total">
                <h1>Cart Total</h1>
                <li className="Cart-Totaldetails">
                    <p>Sub Totals</p>
                    <p>{totalAmount.toFixed(2)}</p>
                </li>
                <li className="Cart-Totaldetails">
                    <p>Delivery fee</p>
                    <p>{totalAmount===0?0:2}</p>
                </li>
                <li className="Cart-Totaldetails">
                    <p>Total</p>
                    <p>{totalAmount+2}</p>
                </li>
                <button>proceed to check out</button>
            </ul>
            </div>
            <div className="promo-Code">
                <p>if you have a promo code enter it here</p>
                <div className="promo-area">
                    <input type="text" />
                    <input type="submit" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
