import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from './pages/Home/Home';


function App() {

  useEffect(() => {
    document.title = "Learning-Point-Home";  
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
