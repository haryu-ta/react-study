import { configureStore } from "@reduxjs/toolkit";
import count from "./modules/count"

export default configureStore({
    reducer : {
        calc : count
    }
})