import { useSelector } from "react-redux"

const ResultObject = () => {

    const states = useSelector(state => state.objects);

    return (
        <>
            <ul>
                <li>{states.name}</li>
                <ul>
                    <li>{states.gender}</li>
                    <li>{states.stable}</li>
                </ul>
            </ul>
        </>
    )
}
export default ResultObject