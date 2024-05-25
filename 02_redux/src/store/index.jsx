import { configureStore } from "@reduxjs/toolkit";
import count from "./modules/count"
import count2 from "./modules/count2";
import objectiveState from "./modules/objectiveState";

// reducerの定義
export default configureStore({
    reducer : {
        // 単純state
        calc : count,
        // オブジェクトstate
        objects: objectiveState,
        // 非同期処理
        asyncCalc: count2
    }
})