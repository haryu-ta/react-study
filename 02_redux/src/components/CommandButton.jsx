import { useDispatch } from "react-redux";
import { plus,minus } from "../store/modules/count";

const CommandButton = ({lang}) => {

    // dispatchの利用
    const dispatch = useDispatch();

    const clickHandler = () => {
        const action = lang === "+" ? plus({name:"itamura",gender:"Male"}) : minus(1);
        // dispatch実行
        dispatch(action);
    }

    return (
        <>
            <button onClick={clickHandler} style={{"background":"lightgray","border":"solid","margin": "5px"}}>{lang}</button>
        </>
    )
}
export default CommandButton;