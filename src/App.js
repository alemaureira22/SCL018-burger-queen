import { Waiter } from './components/waiter.js';
import { Route, Routes } from 'react-router-dom';

const App = ()=> {
  return (
    <>
      <Routes>
        <Route path='/' element={<Waiter />} />
      </Routes>
    </>
  );
}

export default App;
