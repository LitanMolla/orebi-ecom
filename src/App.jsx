
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import NotFoun from './layouts/NotFoun'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<NotFoun/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
