import { configureStore } from "@reduxjs/toolkit";
import count from "./modules/count"
import objectiveState from "./modules/objectiveState";

// reducerの定義
export default configureStore({
    reducer : {
        calc : count,
        objects: objectiveState
    }
})