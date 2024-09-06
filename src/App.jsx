
import './App.css'
import Home from './Components/Home'
import { Login } from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import { AddMovie } from './Components/AddMovie'
import { Signup } from './Components/Signup'

function App() {  

  return (
    <>
    {/* <Appbar/> */}
    
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/add' element={<AddMovie/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
 </Routes>
     </>
  )
}

export default App
