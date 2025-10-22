import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import TravelPage from './components/Travel'
import CommitteePage from './components/OrganisingCommiittee'
import ProgrammeCommitteePage from './components/PogrameCommitte'
import AdvisoryCommitteePage from './components/AdvisoryCommittee'
import KeynoteSpeakersPage from './components/Speakers'
import RegistrationPage from './components/Registration'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="travel" element={<TravelPage/>}/>
          <Route path="committee/organizing-committee" element={<CommitteePage/>}/>
          <Route path="committee/program-committee" element={<ProgrammeCommitteePage/>}/>
          <Route path="committee/advisory-committee" element={<AdvisoryCommitteePage/>}/>
          <Route path="speakers" element={<KeynoteSpeakersPage/>}/>
          <Route path="registration" element={<RegistrationPage/>}/>
          

          
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
