import { Waiter } from './components/waiter.js';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home.js';
import {Kitchen} from './components/kitchen.js';


const App = ()=> {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/waiter' element={<Waiter/>} />
        <Route path='/kitchen' element={<Kitchen/>} />
      </Routes>
    </>
  );
}

export default App;
