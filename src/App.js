import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Homepage from './pages/Homepage'
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import TermsConditions from './pages/TermsConditions';
import Medicinepage from './pages/Medicinepage';
import Healthcare from './pages/Healthcare';
import Labtest from './pages/Labtest';

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
          <Route path='/aboutuspage' element={<AboutUs/>} />
          <Route path='/privacypolicypage' element={<PrivacyPolicy/>} />
          <Route path='/faqpage' element={<FAQ/>} />
          <Route path='/termsconditionspage' element={<TermsConditions/>} />
          <Route path='/medicinepage' element={<Medicinepage/>} />
          <Route path='/healthcarepage' element={<Healthcare/>} />
          <Route path='/labtestpage' element={<Labtest/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
