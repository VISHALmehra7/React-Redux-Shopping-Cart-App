
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Header/Navbar'

function App() {


  return (
    <>
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
     </Routes>

    </div>
    </>
  )
}

export default App
