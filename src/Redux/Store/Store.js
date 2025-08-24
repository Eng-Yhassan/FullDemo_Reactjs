import { combineReducers, configureStore } from "@reduxjs/toolkit"
import CartSlice from "../Reduce/Cart"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"


const config = {
    key: "root",
    storage
}
const AllReducers = combineReducers({
    CartCount:CartSlice
})
const reducers = persistReducer(config , AllReducers)

const cartConfig= configureStore({
    reducer:reducers
})
export default cartConfig