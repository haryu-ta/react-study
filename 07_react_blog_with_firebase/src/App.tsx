import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './components/Home'
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'

function App() {

  const [authInfo,setAuthInfo] = useState<{isAuth:boolean,username:string|null}>({isAuth:false,username:null});

  return (
    <BrowserRouter>
      <Navbar isAuth={authInfo.isAuth}/>
      <Routes>
        <Route path="/" element={<Home authInfo={authInfo} />} />
        <Route path="/post" element={<CreatePost isAuth={authInfo.isAuth} />} />
        <Route path="/login" element={<Login setAuth={setAuthInfo} />} />
        <Route path="/logout" element={<Logout setAuth={setAuthInfo} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
