import { useSelector } from 'react-redux'
import './App.css'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { cartState } from './store'

function App() {

  const isDisplay = useSelector((state:cartState) => state.modal )

  return (
    <main>
      { isDisplay ? <Modal/> : ""}
      <Navbar/>
    </main>
  )
}

export default App
