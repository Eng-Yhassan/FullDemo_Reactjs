import Cards from '../components/Cards'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Shop() {
  const [xog, setXog] = useState([])
  const [search, setSearch]= useState("")


  const handlXog = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setXog(response.data)
    }).catch(error => console.log(error));
  }

  const filterXog= xog.filter((xog2)=>{
    const SearchData= xog2.title.toLowerCase().includes(search.toLowerCase())
    return SearchData
  })

  useEffect(() => {
    handlXog()
  }, [])

  return (<>
    {/* Filter */}
    <div className='flex gap-20 mx-20 mt-20'>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} className='w-80 h-10 bg-gray-500 text-white rounded-lg pl-10 outline-none' type="search" placeholder='Search The Product' />
      <div className='text-2xl space-x-10'>
        <input className='scale-150' type="radio" name='product' /> All
        <input className='scale-150' type="radio" name='product' /> electronics
        <input className='scale-150' type="radio" name='product' /> jewelery
        <input className='scale-150' type="radio" name='product' /> men's clothing
        <input className='scale-150' type="radio" name='product' /> women's clothing
      </div>
    </div>
    <div className='flex flex-wrap justify-center gap-10 mt-20'>
      {
        filterXog.map((item) => {
          return (
            <Cards product={item} />
          )
        })
      }
    </div>
  </>
  )
}
