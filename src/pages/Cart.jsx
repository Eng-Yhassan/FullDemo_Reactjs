import Cards from '../components/Cards'
import { useSelector } from 'react-redux'
import { data } from 'react-router-dom'
function Cart() {
    const items= useSelector((state)=> state.CartCount.item)
  return (
    <div className='flex flex-col flex-wrap justify-center items-center mt-20 mb-20' >
        {
            items.length > 0 ? items.map((data)=>{
                return (
                   <div>
                    <div className='flex justify-center gap-20 w-[800px]  h-36 bg-green-500 text-red-900 border-2 border-black pl-10 pt-4 mt-10'>
                        <img className='w-[180px] h-28' src={data.image} alt="" />
                        <div className='space-y-2'>
                            <h1>{data.title}</h1>
                            <h1>{data.price}</h1>
                        </div>
                        <button className='text-red-900'><i className="fa-solid fa-trash"></i></button>
                    </div>
                   </div>
                )
            })
            : 
            <p>There's No Any Product's</p>
        }
    </div>
  )
}
export default Cart
