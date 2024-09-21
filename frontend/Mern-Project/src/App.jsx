
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext.jsx'
import { Home } from './pages/Home'
import  Login  from './pages/Login'
import  Signup  from './pages/Signup'
import { NavBar } from './components/NavBar.jsx'
function App() {
  const { user } = useAuthContext()

  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <NavBar />
          <div className='pages'>
            <Routes>
              <Route 
                path='/'
                element={user ? <Home /> : <Navigate to="/login"/>}
              ></Route>
              <Route 
                path='/login'
                element={!user ? <Login /> : <Navigate to="/" />}
              ></Route>
              <Route 
                path='/signup'
                element={!user ? <Signup /> : <Navigate to="/" />}
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
