import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './routes/home/home.component';


const Navigation = () => {
  return(
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
    </div>
  )
}
const App = () => {
  console.log ("App")

  return (
    <Routes>
      <Route path='/'element={<Navigation />} />
      <Route exact path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
