import './App.css';
import {Routes, Route} from 'react-router-dom';

/*
..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
.##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
.##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
.##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
.##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
.##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
*/
import TopNavbar from './components/TopNavBar.js';

/*.########.....###.....######...########..######.
  .##.....##...##.##...##....##..##.......##....##
  .##.....##..##...##..##........##.......##......
  .########..##.....##.##...####.######....######.
  .##........#########.##....##..##.............##
  .##........##.....##.##....##..##.......##....##
  .##........##.....##..######...########..######.*/

import Home from './pages/Home.js';
import Brands from './pages/Brands.js';
import Boricanna from './pages/Boricanna.js';
import Sustainability from './pages/Sustainability.js';
import Company from './pages/Company.js';
import Careers from './pages/Careers.js';

function App() {
  return (
    <div className="App">
      <TopNavbar />
       
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/boricanna' element={<Boricanna/>}/>
        <Route path ='/brands' element={<Brands/>}/>
        <Route path='/sustainability' element={<Sustainability/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/careers' element={<Careers/>}/>
      </Routes>
    </div>
  );
};

export default App;