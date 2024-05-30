import { useTheme } from "../context/ContextProvider"

const Body = () => {

    const theme = useTheme();

    return (
        <div>{theme}</div>
    )
}
export default Body;