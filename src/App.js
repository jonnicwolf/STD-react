import './App.css';

import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js'

import Brands from './pages/Brands.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/brands' element={<Brands/>}/>
        {/* <Route path='' element={</>}>
        <Route path='' element={</>}>
        <Route path='' element={</>}>
        <Route path='' element={</>}>
        <Route path='' element={</>}> */}
      </Routes>
    </div>
  );
}

export default App;
