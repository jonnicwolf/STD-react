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
  import Smokes from './pages/Smokes'
  import Pieces from './pages/Pieces'
  import Bits from './pages/Bits'
  import Swag from './pages/Swag'
  import Tools from './pages/Tools'
import Brands from './pages/Brands.js';
import Boricanna from './pages/Boricanna.js';
import Sustainability from './pages/Sustainability.js';
import Company from './pages/Company.js';
import Careers from './pages/Careers.js';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <TopNavbar />
       
      <Routes>
        <Route exact path='/' element={<Home/>}/>

        {/* Extras */}
        <Route path='/smokes' element={<Smokes/>}/>
        <Route path='/pieces' element={<Pieces/>}/>
        <Route path='/bits' element={<Bits/>}/>
        <Route path='/swag' element={<Swag/>}/>
        <Route path='/tools' element={<Tools/>}/>        

        {/* TopNav */}
        <Route path='/boricanna' element={<Boricanna/>}/>
        <Route path ='/brands' element={<Brands/>}/>
        <Route path='/sustainability' element={<Sustainability/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/careers' element={<Careers/>}/>

        {/* Cart */}
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

    </div>
  );
};

export default App;