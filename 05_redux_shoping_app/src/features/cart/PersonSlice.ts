import { createSlice } from "@reduxjs/toolkit";

// Sliceの定義（state/reducer）
const PersonSlice = createSlice({
    name:"persons",
    initialState:"瑞原",
    reducers: {
        addCronwn:(state) => {
            return state + "様";
        }
    }
});

export default PersonSlice.reducer;