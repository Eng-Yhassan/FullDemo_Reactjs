import { useEffect } from 'react'
import { calculatePrice, removeItem } from '../Redux/Reduce/Cart'
import Cards from '../components/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { data } from 'react-router-dom'

function Cart() {
    const items = useSelector((state) => state.CartCount.item)
    const TotalPrice = useSelector((state) => state.CartCount.totalPrice)

    const dispatch = useDispatch()

    const HandleRemoveItem = (itemIndex) => {
        dispatch(removeItem(itemIndex))
        dispatch(calculatePrice())
    }

    useEffect(() => {
        dispatch(calculatePrice())
    }, [])
    return (
        <div className='flex flex-col flex-wrap justify-center items-center mt-20 mb-20' >
            {
                items.length > 0 ? items.map((data, index) => {
                    return (
                        <div>
                            <div className='flex justify-center gap-20 w-[800px]  h-36 bg-green-500 text-red-900 border-2 border-black pl-10 pt-4 mt-10'>
                                <img className='w-[180px] h-28' src={data.image} alt="" />
                                <div className='space-y-2'>
                                    <h1>{data.title}</h1>
                                    <h1>{data.price}</h1>
                                </div>
                                <button onClick={() => HandleRemoveItem(index)} className='text-red-900'><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    )
                })
                    :
                    <p className='text-4xl font-semibold'>There's no Any Products</p>
            }

            <div className='mt-10 space-y-4 text-3xl'>
                <hr className='border-2 border-black w-[800px]' />
                <h1 className='font-semibold'>Your Total Price is :
                    <span className='font-bold ml-2 text-green-500'>
                        ${TotalPrice}
                    </span>
                </h1>
            </div>
        </div>
    )
}
export default Cart
