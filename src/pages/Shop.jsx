import Cards from '../components/Cards'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Shop() {
    const [xog, setXog]= useState([])

    const handlXog=()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            setXog(response.data)
        })
    }

    useEffect(()=>{
        handlXog()
    },[])

    return (
        <div className='flex flex-wrap justify-center gap-10'>
          {
            xog.map((item)=>{
               return(
                 <Cards product={item}/>
               )
            })
          }
        </div>
    )
}
