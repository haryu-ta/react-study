1. Providerの定義

```javascript
import { Provider } from "react-redux"
import store from "./store"

<Provider store={store}>
  <!-- stateを共有したいコンポーネント -->
</Provider>
```

2. storeの定義

```javascript
import { configureStore } from "@reduxjs/toolkit";

// reducerの定義
export default configureStore({
    reducer : {
        calc : count,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger);
    }
})
```

3. state定義

```javascript
import { createSlice } from "@reduxjs/toolkit";

// stateとreducerを定義
const count = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        plus(state,{payload}){
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
```

4. stateの使用
   
```javascript
import { useDispatch } from "react-redux";
import { plus,minus } from "../store/modules/count";

const CommandButton = ({lang}) => {

    // dispatchの利用
    const dispatch = useDispatch();

    const clickHandler = () => {
        const action = lang === "+" ? plus(1) : minus(1);
        // dispatch実行
        dispatch(action);
    }

    return (
        <>
        </>
    )
}
export default CommandButton;
```

5. おまけ（非同期処理での使用）

```javascript
import { createSlice } from "@reduxjs/toolkit";
import Timer from "../../api/Timer"   // 非同期の処理

// stateとreducerを定義
const count2 = createSlice({
    name: "count2",
    initialState: 0,
    reducers: {
        plus(state,{payload}){
            return state + payload;
        }
    }
})

// 非同期処理（reducerを実行前に処理を付け加える）
const asyncAdd = (payload) => {
    return async (dispatch,getStatus) => {
        const res = await Timer(payload);
        dispatch(plus(res.data));
        // 呼出元でdispatch(asyncAdd(1))のように呼び出す
    }
}

const { plus } = count2.actions;
export { plus,asyncAdd } 
export default count2.reducer;
```