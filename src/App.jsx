import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
