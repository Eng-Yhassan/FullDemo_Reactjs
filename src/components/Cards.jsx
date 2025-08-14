import { addToCart } from "../Redux/Reduce/Cart"
import { useDispatch } from "react-redux"
export default function Cards({product}) {
    const dispatch= useDispatch()
    const HandleDispatch=()=>{
        dispatch(addToCart(product))
    }
    return (
        <div>
            <div className='w-80 h-[350px]  rounded-lg  border-2 border-black  p-2'>
                <img className='w-80 h-52 rounded-[6px]' src={product.image} alt="" />
                <div className='flex justify-between text-2xl'>
                    <h1 className="text-[10px]">{product.title}</h1>
                    <h1>${product.price}</h1>
                </div>
                <button onClick={HandleDispatch} className='bg-blue-600 w-full text-textColor text-3xl mt-3'>Add to Cart</button>
            </div>
        </div>
    )
}
