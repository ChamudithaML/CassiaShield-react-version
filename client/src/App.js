import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Image from './components/Pages/Image';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/image' element={<Image/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
