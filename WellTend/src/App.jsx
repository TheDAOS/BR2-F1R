import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import DailyJournal from './components/DailyJournal';
import Insights from './components/Insights';
import Journal from './components/Journal';
import CoachDashboard from './components/CoachDashboard';
import Export from './components/Export';

function App() {

  return (
    <div className='h-screen bg-wing-300'>
      <div className='mx-auto max-w-300'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Insights />} />
            <Route path="/daily" element={<DailyJournal />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/coach" element={<CoachDashboard />} />
            <Route path="/export" element={<Export />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
