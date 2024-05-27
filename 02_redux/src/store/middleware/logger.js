const logger = (store) => {
    return(next) => {
        return(action) => {
            console.log("実行前 : ",action,store.getState());
            next(action);
            console.log("実行後 : ",action,store.getState());
        }
    }
}
export default logger;

// middlewareの定義（全てのdispatch処理前後で実行される共通処理を定義する）
// const reduxMiddleware = (store) => {
//     return (next) => {
//         return (action) => {
//             // storeはアクション実施前の状態を返す
//             next(action) // reducerの処理を実行
//             // storeはアクション実施前の状態を返す
//         }    
//     }
// }