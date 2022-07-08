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

import Account from './pages/Account.js';

import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <TopNavbar />
       
      <Routes>
        <Route exact path='/' element={<Home/>}/>

        {/* TopNav */}
        <Route path='/boricanna' element={<Boricanna/>}/>
        <Route path ='/brands' element={<Brands/>}/>
        <Route path='/sustainability' element={<Sustainability/>}/>
        <Route path='/account' element={<Account/>}/>

        {/* Cart */}
        {/* <Route path='/cart' element={<Cart/>}/> */}
        <Route path='/cart' element={<Checkout/>}/>
      </Routes>

    </div>
  );
};

export default App;