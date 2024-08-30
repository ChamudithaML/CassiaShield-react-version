import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
