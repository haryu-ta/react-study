import { configureStore } from "@reduxjs/toolkit";
import count from "./modules/count"
import count2 from "./modules/count2";
import objectiveState from "./modules/objectiveState";
import logger from "./middleware/logger"

// reducerの定義
// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer : {
        // 単純state
        calc : count,
        // オブジェクトstate
        objects: objectiveState,
        // 非同期処理
        asyncCalc: count2
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger);
    }
})