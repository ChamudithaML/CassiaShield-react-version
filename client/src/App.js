import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Image from './components/Pages/Image';
import Live from './components/Pages/Live';
import Footer from './components/Footer';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import { useState } from 'react';

function App() {

  const [logged,setLogged] = useState(false)

  const checkLogged = (setVisible) => {
    setLogged(setVisible);
  }

  return (
    <BrowserRouter>
      <div>
        {logged && <Navbar />}
        <Routes>
          <Route path='/home' exact element={<Home/>} />
          <Route path='/image' element={<Image/>} />
          <Route path='/live' element={<Live />} />
          <Route path='/login' element={<Login checkLogged={checkLogged} />} />
          <Route path='/' element={<Signup checkLogged={checkLogged} />} />
        </Routes>
        {logged && <Footer />}
      </div>

    </BrowserRouter>
  );
}

export default App;
