import { useNavigate } from "react-router-dom"
import ChildCoponent from "./ChildComponent"
import { useState,useCallback } from 'react'
import BackToHome from "../components/BackToHome"

const BoxStyle = {
    width : "100%",
    height: "fit-content",
    background: "orange",
    padding: "15px 15px"
  }
  
  const CountSytle = {
    fontSize: "20px",
    padding: "15px 0px"
  }

const ParentComponent = () => {

    console.log("%cParentComponent Loaded","color:salmon");

    const navigate = useNavigate();

    const [parentCount,setParentCount] = useState(0);
    const [childCount,setChildCount] = useState(0);
  
    const addCount = () => {
      setParentCount(prev => ++prev);
    }
  
    // 関数のメモ化
    const addChildCount = useCallback(() => {
      setChildCount(prev => ++prev)
    },[]);

    return (
        <>
            <div style={BoxStyle}>
            <h3>
                親コンポーネント領域
            </h3>
            <label>
                <button onClick={addCount}>ボタンA</button>
                親のステートを更新
            </label>
            <br></br>
            <div style={CountSytle}>
                ボタンAクリック回数：{parentCount}
            </div>
            <ChildCoponent value={childCount} clickHandler={addChildCount}/>
            </div>
            <div>
              <BackToHome/>
            </div>
        </>
    )


}
export default ParentComponent;