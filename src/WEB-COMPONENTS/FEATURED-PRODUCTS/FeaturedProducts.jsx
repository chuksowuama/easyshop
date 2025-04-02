import React, { useContext } from "react";
import "./FeaturedProducts.css";
import { featuredProducts } from "../../AlldataAssest";
import { Mycontext } from "../../UsecontextProvider";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { details, AddtoDetails } = useContext(Mycontext);

  return (
    <>
      <div className="featuredProducts">
        <h1>Featured products</h1>
        <h3>take a look at our most </h3>
        <div className="featured-cardContainer">
          {featuredProducts &&
            featuredProducts.length &&
            featuredProducts.map((featItem, index) => (
              <div key={index} className="featured-cards">
                <div className="imageContainer">
                  <img src={featItem.image} alt="" />
                </div>
                <div className="infoContainer">
                  <div className="Name-rating">
                    <h3>{featItem.Name}</h3>
                    <p>Rtings:{featItem.rating}</p>
                  </div>
                  <p className="price"><span>Price:</span>${featItem.price}</p>
                  <p className="feat-description">{featItem.description.length>0?featItem.description.slice(0,100)+"...":featItem.description}</p>
                  <Link to={"/Details"}>
                    <button onClick={() => AddtoDetails(featItem.id)}>
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
