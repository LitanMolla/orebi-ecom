
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import NotFoun from './layouts/NotFoun'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFoun/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
