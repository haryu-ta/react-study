import { useSelector } from "react-redux";

const Result = () => {

    // stateの利用
    const count = useSelector(state => state.calc);

    return(
        <>
            <div>
                <h2>Result:{count}</h2>
            </div>
        </>
    )
}
export default Result;