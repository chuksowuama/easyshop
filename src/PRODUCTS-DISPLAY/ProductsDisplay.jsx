import React, { useContext } from "react";
import "./ProductsDisplay.css";
import { Mycontext } from "../UsecontextProvider";
import ProductsCard from "../PRODUCTS-CARDS/ProductsCard";

const ProductsDisplay = ({ Categories }) => {
  const { products,details, AddtoDetails  } = useContext(Mycontext);
  return (
    <>
      <div>
        <div className="prodisplay-title">
        <h1>Explore Our Collection</h1>
        <h3>Discover the perfect products for your needs</h3>
        </div>
        <div className="products-display">
          {products && products.length
            ? products.map((Proditem, index) => {
                if (Categories === "ALL" ||Proditem.category ===Categories) {
                  return (
                    <ProductsCard
                      key={index}
                      image={Proditem.image}
                      description={Proditem.description}
                      id={Proditem.id}
                      price={Proditem.price}
                      rating={Proditem.rating?.rate}
                      title={Proditem.title}
                    />
                  );
                }
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default ProductsDisplay;
