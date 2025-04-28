import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Homepage from './pages/Homepage'
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage/>} />
          <Route path='/loginpage' element={<Loginpage/>} />
          <Route path='/signuppage' element={<Signuppage/>} />
          <Route path='/homepage' element={<Homepage/>} />
          <Route path='/cartpage' element={<CartPage/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
