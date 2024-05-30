import ContextProvier from "../context/ContextProvider"
import Header from "./Header"
import ChangeItem from "./ChangeItem"

const ContextTop = () => {

    return (
        <ContextProvier>
            <Header/>
            <ChangeItem/>
        </ContextProvier>
    )
}

export default ContextTop;