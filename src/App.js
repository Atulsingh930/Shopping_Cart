import './App.css';
import Home from './page/Home';
import Cart from './page/Cart';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Toaster/>

    </div>
  );
}

export default App;
