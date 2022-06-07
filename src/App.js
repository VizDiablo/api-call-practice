import './App.css';
import LoadData from './Components/LoadData';
import StickyNavBar from './Components/StickyNavBar';
import NavBar from './Components/PopOutNavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Universities</h1>
      <div className='app-main'>
        <Router>
          <StickyNavBar />
          <Routes>
            <Route path='/' />
          </Routes>
        </Router>
        <LoadData />
      </div>
    </div>
  );
}

export default App;
