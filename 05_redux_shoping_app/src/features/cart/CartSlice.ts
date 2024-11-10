import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../../item/CartItem";

const initialState = {
    cartItem: CartItems,
    amount: 1,
    total: 0
}

const cartSlice = createSlice({
    name:"cartReducerName",
    initialState,
    reducers: {
        // 全削除ボタン押下
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        allClear: (_state) => {
            return {amount:0,total:0,cartItem:[]}
        },
        // プラスボタン押下
        addItem: (state,{payload}) => {
            state.cartItem.map((item) => {
                if(item.id === payload ){
                    ++item.amount;
                }
            })
        },
        // マイナスボタン押下
        downItem : (state,{payload}) => {
            state.cartItem.map((item) => {
                if(item.id === payload){
                    if(item.amount > 1){
                        --item.amount;
                    }
                }
            })
        },
        // 削除ボタン押下
        removeItem : (state,{payload}) => {
            state.cartItem = state.cartItem.filter((item) => item.id !== payload );
        },
        // 全商品の合計と金額の再計算
        calcTotal:(state) => {
            let amount = 0;
            let price = 0;
            state.cartItem.forEach((item) => {
                amount += item.amount;
                price += item.price * item.amount;
            })
            state.amount = amount;
            state.total = price;
        }
    }
});
export default cartSlice.reducer;
export const { allClear,addItem,removeItem,downItem,calcTotal } = cartSlice.actions;

