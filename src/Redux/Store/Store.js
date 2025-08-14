import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "../Reduce/Cart"
const cartConfig= configureStore({
    reducer:{
        CartCount: CartSlice
    }
})
export default cartConfig