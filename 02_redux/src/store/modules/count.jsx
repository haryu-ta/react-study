import { createSlice } from "@reduxjs/toolkit";

// stateとreducerを定義
const count = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        plus(state,{payload}){
            console.dir(payload);
            // Point!!
            // mutableな値の場合にはreturnが必要
            return ++state;
        },
        minus(state,{payload}){
            return --state;
        }
    }
})

const { plus,minus } = count.actions;
export { plus,minus } 
export default count.reducer;