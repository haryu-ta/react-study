import { Link } from "react-router-dom";

const  userData = [
    {
        id:1,
        name:"Ryohei",
        age:42,
        hobbies:[
            "HorseRace","Majan"
        ],
        male:true
    },
    {
        id:2,
        name:"Kana",
        age:41,
        hobbies:[
            "Sweets"
        ],
        male:false
    },
]

const JsonTest = () => {

    // ObjectをJSON（文字列に）変換
    const jsonUserdata = JSON.stringify(userData);
    console.log(`%c${jsonUserdata}`,"color:green");

    // JSONをObject型に変換
    const objectUserdata = JSON.parse(jsonUserdata);
    //console.log(objectUserdata);

    return (
        <>
            <ul>
                {objectUserdata.map((_user) => {
                    return <li key={_user.id}>{_user.name}</li>
                })}
            </ul>
            <Link to={'/'}>戻る</Link>
        </>
    )

}

export default JsonTest;