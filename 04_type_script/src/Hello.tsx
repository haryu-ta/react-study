import { useState } from "react"

// パラメータの型定義
type ParamType = {
    who:string,
    fn : (val: string) => string,  // 関数を渡す
    children? : React.ReactNode    // 子要素
}

type userType = {
    name : string,
    age: number
}

type todoType = {
    id: number,
    text: string
}


const Hello : React.FC<ParamType> = (props) => {

    //const [ users,setUsers] = useState<userType[]>([{name : "aaa",age : 21},{name:"",age:20}])
    const [ todos,setTodos ] = useState<todoType[]>([{id:1,text: "dcds"},{id:2,text: "abc"}]);

    const user:userType = {name: "abc",age : 21}

    const clickHandler = () => {
        console.log('go');
    }

    return (
        <>
            <h1>Hello {props.who}{props.fn(" country")}</h1>
            <h3>{props.children}</h3>
            <h3>{user.name}</h3>
            <button onClick={clickHandler}>clickme</button>
        </>
    ) 
}
export default Hello;