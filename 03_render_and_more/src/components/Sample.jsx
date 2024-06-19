import { useReducer } from "react"
import countReducer from "../reducer/countReducer"

const SampleComponent = () => {

    const [dispNumber,dipatch] = useReducer(countReducer,{count: 1,step: 1})

    const upHandler = () => {
        dipatch({type:"up"});
    }

    const downHandler = () => {
        dipatch({type:"down"});
    }

    const change = (e) => {
        dipatch({type:"change", payload: e.target.value});
    }

    return (
        <>
            <div>カウント:{dispNumber.count}</div>
            <button onClick={upHandler}>カウントアップ</button>
            <button onClick={downHandler}>カウントダウン</button>
            <input type="number" name="stepnumber" id="stepnumber" value={dispNumber.step} onChange={change}/>
        </>
    )

}
export default SampleComponent;