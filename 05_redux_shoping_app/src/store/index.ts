import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cart/CartSlice";
import PersonReducer from "../features/cart/personSlice";
import ModalReducer from "../features/modal/ModalSlice";

// 複合バージョン
// const rootReducer = combineReducers({CartReducer,PersonReducer});

// const store = configureStore({reducer : {
//     rootReducer
// }});

// storeの定義（reducerの導入）
const store = configureStore({
    reducer:{
        cart: CartReducer,
        person:PersonReducer,
        modal: ModalReducer
    }
});

export default store;
export type cartState = ReturnType<typeof store.getState>
