
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import NotFoun from './layouts/NotFoun'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyAccount from './pages/MyAccount'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/account' element={<MyAccount/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFoun/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
