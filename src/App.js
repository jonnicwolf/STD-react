import './App.css';

import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js'

import Home from './pages/Home.js';
import Brands from './pages/Brands.js';
import Boricana from './pages/Boricana.js';
import Sustainability from './pages/Sustainability.js';
import Company from './pages/Company.js';
import Careers from './pages/Careers.js';

function App() {
  return (
    <div className="App">
      <Navbar />
       
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route path='/boricana' component={Boricana}/>
        <Route path ='/brands' component={Brands}/>
        <Route path='/sustainability' component={Sustainability}/>
        <Route path='/company' component={Company}/>
        <Route path='/careers' component={Careers}/>
      </Routes>
    </div>
  );
}

export default App;
