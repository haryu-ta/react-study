import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import JsonTest from "./components/JsonTest"
import NotFound from "./components/NotFound"
import ParentComponent from "./reactMemo/ParentComponent"
import CallbackParentComponent from "./useCallback/ParentComponent"
import UsememoParentComponent from "./useMemo/ParentComponent"
import DynamicImport from "./dynamicImport/DynamicImport"
import AxiosComponent from "./axios/AxiosComponent"
import SampleComponent from "./components/Sample"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/json'} element={<JsonTest/>} />
        <Route path={'/parent'} element={<ParentComponent/>} />
        <Route path={'/callbackParent'} element={<CallbackParentComponent/>} />
        <Route path={'/useMemoParent'} element={<UsememoParentComponent/>} />
        <Route path={'/dynamicImport'} element={<DynamicImport/>} />
        <Route path={'/axios'} element={<AxiosComponent/>} />
        <Route path={'/sample'} element={<SampleComponent/>} />
        <Route path={'*'} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
