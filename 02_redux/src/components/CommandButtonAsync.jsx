import { useDispatch } from "react-redux";
import { asyncAdd } from "../store/modules/count2";

const CommandButtonAsync = () => {

    // dispatchの利用
    const dispatch = useDispatch();

    const clickHandler = () => {
        // dispatch実行
        dispatch(asyncAdd(5));
    }

    return (
        <>
            <button onClick={clickHandler} style={{"background":"lightgray","border":"solid","margin": "5px"}}>+5</button>
        </>
    )
}
export default CommandButtonAsync;