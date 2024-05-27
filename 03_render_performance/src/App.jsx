import { useState } from 'react'
import ChildCoponent from "./components/ChildConponent"


function App() {

  const [ parentCount,setParentCount ] = useState(0);

  const clickHandler = () => {
    setParentCount(prev => ++prev);
  }

  return (
    <>
      <ChildCoponent count={parentCount}/>
      <button onClick={clickHandler}>+</button>
    </>
  )
}

export default App
