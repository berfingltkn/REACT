import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* path='/' yaptığımızda local host 300 de çalış demek istedik.  */}
        <Route path='/aboutUs' element={<AboutUs />} />
        {/* web sayfasının uzantısına aboutUs eklersek aboutUs componenti çalışır */}
      </Routes>
    </div>
  );
}

export default App;
