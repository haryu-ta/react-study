import { Link,useNavigate } from "react-router-dom";

const btnStyle = {
    borderRadius : "10px",
    width: "300px",
    height: "60px",
    background: "pink",
    marginTop: "3px"
}

const Home = () => {

    console.log("%cHome Loaded","color:blue");

    const navigate = useNavigate();

    return (
        <>
            <button type="button" 
                style={btnStyle} 
                onClick={ () => navigate('/parent')}>レンダリング制御(ReactMemo)</button>
            <br/>
            <button type="button" 
                style={btnStyle}
                onClick={ () => navigate('/callbackParent')}>レンダリング制御(useCallback)</button>
            <br/>
            <button type="button" 
                style={btnStyle}
                onClick={ () => navigate('/useMemoParent')}>レンダリング制御(useMemo)</button>
            <br/>
            <button type="button" 
                style={btnStyle}
                onClick={ () => navigate('/dynamicImport')}>ダイナミックインポート</button>
            <br/>
            <button type="button" 
                style={btnStyle}
                onClick={ () => navigate('/axios')}>axios</button>
            <br/>
            <br/>
            <button type="button" 
                style={btnStyle}
                onClick={ () => navigate('/sample')}>実験</button>
            <br/>
            <br/>
            <Link to={'/json'}>JSON</Link>
        </>
    )

}
export default Home;