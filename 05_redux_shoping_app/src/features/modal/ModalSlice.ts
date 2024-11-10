import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: "modal",
    initialState:false,
    reducers:{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        openModal: (_state) => {
            return true;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        closeModal: (_state) => {
            return false;
        }
    }
})
export const {openModal,closeModal} = ModalSlice.actions;
export default ModalSlice.reducer;