import { createSlice } from "@reduxjs/toolkit";

const objectiveState = createSlice({
    name: "objects",
    initialState: {
        name: "Deep Impact",
        gender: "Male",
        stable: "池江"
    },
    reducers: {
        changeGender(state){
            const newGender = state.gender === "Male" ? "Female" : "Male";
            state.gender = newGender;
        },
        changeStable(state,{payload}){
            state.stable = payload;
        }
    }
})

export const { changeGender,changeStable } = objectiveState.actions;
export default objectiveState.reducer;