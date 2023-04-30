import LandingPage from './Landing Page/LandingPage'
import Research from './Prompt/prompt'
import './App.css'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Research' element={<Research/>}/>
      </Routes>
    </>
  )
}

export default App
