import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";
import { signOut } from "firebase/auth";

const Logout = ({setAuth} : { setAuth: (auth: { isAuth: boolean, username: string | null }) => void }) => {

  const nav = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isAuth");
      setAuth({isAuth:false,username:null});
      nav("/login");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="login">
      <h1>ログアウトしてください</h1>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout