import React, { createContext, useEffect, useState } from "react"
import Uselocalstorage from "./Uselocalstorage"
import { featuredProducts } from "./AlldataAssest"

export const Mycontext=createContext(null)

const UsecontextProvider = (props) => {
const[products,setproducts]=Uselocalstorage("products",{})
const[Loading,setLoading]=useState(true)
const[error,seterror]=useState(null)
const[details,setdetails]=Uselocalstorage("details",{})
const[Cart,setCart]=useState({})
    
function AddtoDetails(deItem){
  if(!details[deItem]){
    setdetails((prev)=>({[deItem]:1}))
  }
}

function AddToCart(CartItem){
  if(!Cart[CartItem]){
    setCart((prev)=>({...prev,[CartItem]:1}))
  }else{
    setCart((prev)=>({...prev,[CartItem]:prev[CartItem]+1}))
  }
}

function removeCart(CartItem){
    setCart((prev)=>({...prev,[CartItem]:prev[CartItem]-1}))
}


async function getproducts(){
        try {
            setLoading(true)
            const response=await fetch('https://fakestoreapi.com/products')
            const data=await response.json()
            if(data&&data.length>0){
                setproducts(data)
                setLoading(false)
            }
        } catch (error) {
             seterror(error)
        }
    }
     useEffect(()=>{
        getproducts()
     },[])

     function getTotalamountIncart(){
      let totalAmount=0;
      for(const item in Cart ){
         if(Cart[item]){
         const product=products.find(proditem=>proditem.id===Number(item)) || featuredProducts.find(featitems=>featitems.id===Number(item))
         totalAmount+=product.price*Cart[item]
        //  if(product){
        //   totalAmount+=product.price*Cart[item]
        //  }else{ 
        //   console.log("product was not found")
        //  }

         }
      }
      return isNaN(totalAmount)?0:Number(totalAmount)
     }

    
     useEffect(()=>{
      getTotalamountIncart
     })

     useEffect(()=>{
      console.log(Cart)
     })
    //  if(Loading){
    //     return <div>Loading Project</div>
    //  }
      
    const contextvalue={products,details,AddtoDetails,Cart,AddToCart,removeCart,getTotalamountIncart}
  return (
    <Mycontext.Provider value={contextvalue}>
     {props.children}
     </Mycontext.Provider>
  )
}

export default UsecontextProvider