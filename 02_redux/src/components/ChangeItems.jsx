import { useDispatch } from "react-redux"
import { useState } from "react"
import { changeGender, changeStable } from "../store/modules/objectiveState";


const contentSytle = {
    border: "solid",
    padding: "10px",
    width: "fit-content",
    backgroundColor: "#BBF4D7"
  }

const ChangeItems = () => {

    const [stable, setStable] = useState("池江");

    const dispatch = useDispatch();

    const changeHandler = () => {
        dispatch(changeGender())
    }

    const stableChangeHandler = () => {
        if(stable){
            dispatch(changeStable(stable));
        }
    }

    const textChange = (e) => {
        setStable(e.target.value);
    }

    return (
        <>
            <div style={contentSytle}>
                <button onClick={changeHandler}>性別</button>
            </div>
            <br />
            <div style={contentSytle}>
                <label>厩舎：
                    <input type="text" onChange={textChange} />
                </label>
                <button onClick={stableChangeHandler} style={{"margin":"10px"}}>厩舎</button>
            </div>
        </>
    )
}
export default ChangeItems