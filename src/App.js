import './App.css';
import LoadData from './Components/LoadData';
import StickyNavBar from './Components/StickyNavBar';
import NavBar from './Components/PopOutNavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

///For the pop-out navbar



function App() {
  return (
    <div className="App">
      <h1>Universities</h1>
      <div className='app-main'>
        <Router>
          <NavBar />
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
