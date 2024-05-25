import { createSlice } from "@reduxjs/toolkit";
import Timer from "../../api/Timer"

// stateとreducerを定義
const count2 = createSlice({
    name: "count2",
    initialState: 0,
    reducers: {
        plus(state,{payload}){
            // Point!!
            // mutableな値の場合にはreturnが必要
            return state + payload;
        }
    }
})

// 非同期処理
const asyncAdd = (payload) => {
    return async (dispatch,getStatus) => {
        const res = await Timer(payload);
        dispatch(plus(res.data));
    }
}

const { plus } = count2.actions;
export { plus,asyncAdd } 
export default count2.reducer;