import './App.css';

import {Routes, Route, Link} from 'react-router=dom';
import Navbar from './components/Navbar.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='' element={</>}>
        <Route path='' element={</>}>
        <Route path='' element={</>}>
        <Route path='' element={</>}>
        <Route path='' element={</>}>
        <Route path='' element={</>}>
      </Routes>
    </div>
  );
}

export default App;
