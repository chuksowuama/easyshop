import React, { createContext, useEffect, useState } from 'react'

export const Mycontext=createContext(null)

const Usecontext = (props) => {
const[products,setproducts]=useState({})
const[Loading,setLoading]=useState(true)
const[error,seterror]=useState(null)

async function getproducts(){
    try {
        setLoading(true)
        const response=await fetch('https://fakestoreapi.com/products')
        const data=await response.json()
        if(data&&data.length>0){
            setproducts(data)
            console.log(data)
            setLoading(false)
        }
    } catch (error) {
         seterror(error)
    }
}
 useEffect(()=>{
    getproducts()
 },[])

//  if(Loading){
//     return <div>Loading Project</div>
//  }
  
const contextvalue={products}

  return (
    <Mycontext.Provider value={contextvalue}>
        {props.children}
    </Mycontext.Provider>
  )
}

export default Usecontext
