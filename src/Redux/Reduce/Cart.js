import { createSlice } from "@reduxjs/toolkit"
const CartSlice = createSlice({
    name: "CartCount",
    initialState: {
        item: [],
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, XogtaCateg) => {
            const newData = XogtaCateg.payload
            state.item.push(newData)
        },
        removeItem: (state, action) => {
            const itemIndex = action.payload
            state.item = state.item.filter((_, index) => index !== itemIndex)
        },
        calculatePrice: (state) => {
            let price = 0
            state.item.forEach((item) => {
                price += item.price
            })
            state.totalPrice = price
        }
    }
})
export const { addToCart, removeItem, calculatePrice } = CartSlice.actions
export default CartSlice.reducer