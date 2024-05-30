import Body from "../components/Body"
import { useTheme } from "../context/ContextProvider"

const Header = () => {

    const theme = useTheme();

    return (
        <>
            <div style={{"width":"500px","height":"50px","display":"flex","alignItems":"center","justifyContent":"center"}}
                className={`content-${theme}`}
            >
                <Body/>
            </div>
        </>
    )
}
export default Header;