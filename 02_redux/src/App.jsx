import Result from "./components/Result"
import ResultObject from "./components/ResultObject"
import CommandButton from "./components/CommandButton"
import ChangeItems from "./components/ChangeItems"
import store from "./store"
import { Provider } from "react-redux"

const  App = () =>  {
  return (
    <>
      <div>
        <h1>Redux Tool Kit</h1>
        {/* Reduxの定義 */}
        <Provider store={store}>
          <Result/>
          <CommandButton lang="+"/>
          <CommandButton lang="-"/>
          <hr></hr>
          <ResultObject/>
          <ChangeItems/>
        </Provider>
      </div>
    </>
  )
}

export default App

