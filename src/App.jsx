import './App.css';
import Navbar from './features/gowheels/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="app-container">
      <div className='position-fixed"'>
      <Navbar  className="position-fixed"/>
      </div>
      <div className="main-content-container">
        <Outlet />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
