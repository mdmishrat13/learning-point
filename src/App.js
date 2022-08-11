import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';


function App() {

  useEffect(() => {
    document.title = "Learning-Point-Home";  
  }, []);

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
