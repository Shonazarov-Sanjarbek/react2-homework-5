import {createSlice} from "@reduxjs/toolkit"
import { saveStorage, getStorage } from "../helper"

const products = createSlice({
    name: 'product',
    initialState: {
        value:[]
    },
    reducers: {
        add: (state ,action) => {
            state.value =[...state.value, action.payload]
        },
        remove(state, action){
            state.value = state.value.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { inc, dec, reset } = products.actions
export default products.reducer