import React, { useState } from 'react'
import "./Nav-Search.css"

const NavSearch = () => {
  const[SearchValue,setSearchValue]=useState("")
  const[productSearch,setProductSearch]=useState({})

  function handlechange(e){
    setSearchValue(e.target.value)
  }
  
  function handleProductSearch(){
    setProductSearch(SearchValue)
  }

  return (
   <>
   <div className="search-Container">
   <div className='SearchArea'>
    <input type="text" name="" id="" value={SearchValue} onChange={handlechange} />
    <i class="fa-solid fa-magnifying-glass" onClick={handleProductSearch}></i>
   </div>
   </div>
   </>
  )
}

export default NavSearch
