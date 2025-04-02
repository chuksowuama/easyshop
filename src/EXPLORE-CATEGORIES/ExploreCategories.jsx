import React from "react";
import "./ExploreCategories.css";

const ExploreCategories = ({ Categories, setCategories }) => {
  const caategorieslist = [
    { id: 1, category: "men's clothing" },
    { id: 2, category: "jewelery" },
    { id: 3, category: "electronics" },
    { id: 4, category: "women's clothing" },
  ];
  return (
    <>
      <div className="cateegories">
        <ul className="categories-menu">
          {caategorieslist &&
            caategorieslist.length &&
            caategorieslist.map((cateList, index) => (
              <li key={index}
                onClick={()=>setCategories((prev)=>prev===cateList.category?"All":cateList.category)}
              >
                <span className={Categories===cateList.category?"cateActive":""}>{cateList.category}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ExploreCategories;
