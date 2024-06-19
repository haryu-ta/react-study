import { useNavigate } from "react-router-dom"

const btnStyle = {
    borderRadius : "10px",
    width: "300px",
    height: "60px",
    marginTop: "50px"
}

const BackToHome = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/')} style={btnStyle}>TOPへ</button>
    )
}
export default BackToHome;