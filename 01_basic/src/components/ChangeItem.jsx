import { useThemeFnc } from "../context/ContextProvider"

const SelectStyle = {
    width : "500px",
    padding : "5px"
}

const ChangeItem = () => {

    const THEMES = ["light", "dark", "red"];
    const setTheme = useThemeFnc();

    const changeTheme = (e) => {
        setTheme(e.target.value);
    }

    return (
        <select style={SelectStyle} onChange={changeTheme}>
            {THEMES.map((_map) => {
                return (
                    <option value={_map} key={_map}>{_map}</option>
                )
            })}
        </select>
    )

}
export default ChangeItem;