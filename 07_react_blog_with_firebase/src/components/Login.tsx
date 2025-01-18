import "./Login.css";
import { auth, provider } from "../firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }: { setAuth: (auth: { isAuth: boolean, username: string | null }) => void }) => {

  const nav = useNavigate();

  const login = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        //const token = credential.accessToken;
        //const user = result.user;
        setAuth({ isAuth: true, username: result.user.email });
        localStorage.setItem('isAuth', 'true');
        nav('/');
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="login">
      <h1>ログインして始める</h1>
      <button onClick={login}>Googleでログイン</button>
    </div>
  )
}

export default Login;