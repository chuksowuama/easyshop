import React from 'react'
import "./PromtionBan.css"
import promobannerImg from "../assets/stylish-golden-watch-white-surface.jpg"
const PromtionBan = () => {
  return (
    <>
    <div className="promotion-Banner-Container">
      <div className='bannerImg'>
        <img src={promobannerImg} alt="" />
      </div>
        <div className="promo-banner">
          <h1>stylish Golden watch for men</h1>
            <h2>🔥Limited Time Offer – Up to 50% Off! 🔥</h2>
            <h3>Flash SALES:ENDS IN 24 HOURS</h3>
        </div>
    </div>
    </>
  )
}

export default PromtionBan
