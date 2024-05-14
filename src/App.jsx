import { useState } from 'react'
import "./Example.css"
import styles from "./Example.module.css"
import styled from "styled-components";
import Timer from './components/Timer'

const btnSytle = {
  padding: "5px 10px",
  margin: "10px 10px",
  borderRadius: "5px",
  backgroundColor: "red",
  border: "none",
  fontSize : "20px"

}

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: ${({isselected}) => isselected ? "none" : "solid" };
  background-color: ${({isselected}) => isselected ? "purple" : "" };
  color: ${({isselected}) => isselected ? "white" : "black" };

  &:hover{
    opacity: 0.7;
  }

  @media(max-width : 500px) {
    border-radius: 0;
  }
`;

function App() {
  const [counter,setCounter] = useState(0);
  const [button1State,setButton1State] = useState(false); 
  const [button2State,setButton2State] = useState(false);
  const [button3State,setButton3State] = useState(false); 
  const [button4State,setButton4State] = useState(false); 
  const [displayed,setDisplayed] = useState(false);

  // インライン記法
  // JavaScriptオブジェクトとして定義
  // 擬似クエリ使用不可
  // メディアクエリ使用不可
  const inlineStyle = {
    color: button1State ? "white": "black",
    background : button1State ? "black" : "",
    borderRadius: "3px",
    padding: "0.5rem 0",
    margin: "0.5rem 1rem",
    width: "11rem",
    border: button1State ? "none" : "solid"
  }

  // 非同期処理
  const asyncFunc = async(val) => {
    try{
      const result = await new Promise((resolve,reject) => {
        setTimeout(() => {
          if(val){
            resolve();
          }else{
            reject('is Done');
          }
        },2000);
      });
      alert('resolve');
    }catch(e){
      alert(`reject ${e}`)
    }
  }
  
  return (
    <>
      <div>
        <h2>前値の参照</h2>
        <label>
          <input type="button" value="ボタンクリック" style={btnSytle} onClick={() => setCounter((prev) => prev + 1)}/>
        </label> count : {counter}
      </div>
      <div>
        <h2>CSSの適用</h2>
        {/* 制限おおし */}
        <input type="button" value="インラインCSS" style={inlineStyle} onClick={()=> setButton1State(prev => !prev)}/>
        {/* 適用範囲が広くなりすぎる */}
        <input type="button" value="CSSインポート" className={`btn ${button2State ? "selected" : ""}`} onClick={()=> setButton2State(prev => !prev)}/>
        {/* 将来廃止予定 */}
        <input type="button" value="CSS-Module" className={`${styles.btn} ${button3State ? styles.selected : ""}`} onClick={()=> setButton3State(prev => !prev)}/>
        {/* おすすめ */}
        <StyledButton isselected={button4State}  onClick={()=> setButton4State(prev => !prev)}>CSS-IN-JS</StyledButton>
      </div>
      <div>
        <h2>非同期処理</h2>
        <input type="button" value="非同期処理(resolve)" style={{"padding":"10px","margin":"10px"}} onClick={() => asyncFunc(true)} />
        <input type="button" value="非同期処理(reject)" style={{"padding":"10px","margin":"10px"}} onClick={() => asyncFunc(false)} />
      </div>
      <div>
        <h2>useReducer</h2>
      </div>
      <div>
        <h2>useContext</h2>
      </div>
      <div>
        <h2>useEffect</h2>
        <button onClick={ () => setDisplayed(prev => !prev)} style={{"marginBottom":"10px"}}>{displayed ? "非表示" : "表示"}</button>
        {displayed ? <Timer/> : null }
      </div>
    </>
  )
}

export default App

