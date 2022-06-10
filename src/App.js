import './App.css';
import UniversityOverview from './Components/UniversityOverview';
import StickyNavBar from './Components/StickyNavBar';
import NavBar from './Components/PopOutNavBar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Reports from './pages/reports';
import Support from './pages/support';
import Header from './Components/Header';
import LearnMorePage from './pages/LearnMorePage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-main'>
        <BrowserRouter>
          <StickyNavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/support' element={<Support />} />
            <Route path='/learn-more-page/:universityName' element={<LearnMorePage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
