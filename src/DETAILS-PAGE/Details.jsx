import React, { useContext, useState } from "react";
import "./Details.css";
import { Mycontext } from "../UsecontextProvider";
import { featuredProducts } from "../AlldataAssest";


const Details = () => {
  const {products,details, AddtoDetails, removeDetails,AddToCart } = useContext(Mycontext);
  return (
    <>
      <div className="detail-container">
        <h1>Specifications & Details: </h1>
        <div className="content-Container">
          {products && products.length && products.map((proditem,index)=>{
            if(details[proditem.id]){
              return(
                <div className="featured-content" key={index}>
                    <div className="featImg-container">
                      <img src={proditem.image} alt="" />
                    </div>
                    <div className="featinfo">
                      <p><span>Product Name: </span>{proditem.title}</p>
                      <p><span> Rating :</span>{proditem.rating?.rate}</p>
                      <p><span>Price: </span>{proditem.price}</p>
                      <p> <span>Info: </span>{proditem.description}</p>
                      <div>
                        <button onClick={()=>AddToCart(proditem.id)}>Add to cart</button>
                      </div>
                    </div>
                  </div>
              )
            }
          })}||
          {featuredProducts &&
            featuredProducts.length &&
            featuredProducts.map((featitem, index) => {
              if (details[featitem.id]) {
                return (
                  <div className="featured-content" key={index}>
                    <div className="featImg-container">
                      <img src={featitem.image} alt="" />
                    </div>
                    <div className="featinfo">
                      <h2>Product Name:{featitem.Name}</h2>
                      <h2>Rating :{featitem.rating}</h2>
                      <h2>Price :{featitem.featuredPrice}</h2>
                      <h2>Info:{featitem.description}</h2>
                      <div>
                        <button onClick={()=>AddToCart(featitem.id)}>Add to cart</button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Details;
