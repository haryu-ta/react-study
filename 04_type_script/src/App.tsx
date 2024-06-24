import Hello from "./Hello"

function App() {

  const execFnc = (val:string):string => {
    return val;
  }

  const clickHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  return (
    <>
      <Hello who="Japan" fn={execFnc}>America</Hello>
      <br/>
      <input type="text" onChange={clickHandler}></input>
    </>
  )
}

export default App
