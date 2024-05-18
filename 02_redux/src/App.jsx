import Result from "./components/Result"
import CommandButton from "./components/CommandButton"
import store from "./store"
import { Provider } from "react-redux"

const  App = () =>  {
  return (
    <>
      <div>
        <h1>Redux Tool Kit</h1>
        <Provider store={store}>
          <Result/>
          <CommandButton lang={"+"}/>
          <CommandButton lang={"-"}/>
        </Provider>
      </div>
    </>
  )
}

export default App

