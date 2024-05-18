import { useSelector } from "react-redux";

const Result = () => {

    const num = useSelector(state => state);

    return(
        <>
            <div>
                <h2>Result:{num.calc}</h2>
            </div>
        </>
    )
}
export default Result;