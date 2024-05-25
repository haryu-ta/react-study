import { useSelector } from "react-redux";

const ResultAsync = () => {

    // stateの利用
    const count = useSelector(state => state.asyncCalc);

    return(
        <>
            <div>
                <h2>Result:{count}</h2>
            </div>
        </>
    )
}
export default ResultAsync;