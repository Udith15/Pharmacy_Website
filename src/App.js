import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage/>} />
          <Route path='/login' element={<Loginpage/>} />
          <Route path='/signup' element={<Signuppage/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
