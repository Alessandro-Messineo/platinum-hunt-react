import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage'
import DetailGamePage from './pages/DetailGamePage'
import DefaultLayout from './layouts/DefaultLayout'
import ErrorPage from './pages/ErrorPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/games' element={<GamePage />} />
            <Route path='/games/:id' element={<DetailGamePage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
