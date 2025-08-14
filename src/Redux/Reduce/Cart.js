import { createSlice } from "@reduxjs/toolkit"
const CartSlice= createSlice({
    name : "CartCount" ,
    initialState:{
        item:[]
    },
    reducers:{
       addToCart: (state, XogtaCateg)=>{
        const newData = XogtaCateg.payload
        state.item.push(newData)
       }
    }
})
export const {addToCart} = CartSlice.actions
export default CartSlice.reducer