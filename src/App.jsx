import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage'
import DetailGamePage from './pages/DetailGamePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/games' element={<GamePage />}/>
          <Route path='/games/:id' element={<DetailGamePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
