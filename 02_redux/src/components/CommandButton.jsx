import { useDispatch } from "react-redux";
import { plus,minus } from "../store/modules/count";

const CommandButton = ({lang}) => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        const action = lang === "+" ? plus({val:"1"}) : minus(1);
        dispatch(action);
    }

    return (
        <>
            <button onClick={clickHandler} style={{"background":"lightgray","border":"solid","margin": "5px"}}>{lang}</button>
        </>
    )
}
export default CommandButton;