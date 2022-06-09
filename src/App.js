import './App.css';
import LoadData from './Components/LoadData';
import StickyNavBar from './Components/StickyNavBar';
import NavBar from './Components/PopOutNavBar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Reports from './pages/reports';
import Support from './pages/support';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-main'>
        <BrowserRouter>
          <StickyNavBar />
          <Routes>
            <Route path='/' element={<LoadData />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/support' element={<Support />} />
          </Routes>
        </BrowserRouter>
        {/* <LoadData /> */}
      </div>
    </div>
  );
}

export default App;
