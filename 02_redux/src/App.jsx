import Result from "./components/Result"
import ResultAsync from "./components/ResultAsync"
import ResultObject from "./components/ResultObject"
import CommandButton from "./components/CommandButton"
import CommandButtonAsync from "./components/CommandButtonAsync"
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
          <hr/>
          <h3>非同期処理記載</h3>
          <ResultAsync/>
          <CommandButtonAsync/>
        </Provider>
      </div>
    </>
  )
}

export default App

