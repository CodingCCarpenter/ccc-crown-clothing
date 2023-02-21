import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import Home from './routes/home/home.component';


const Navigation = () => {
  return(
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  )
}
const App = () => {
  console.log ("App")

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
        </Route>   
      </Routes>
    </div>

  );
}

export default App;
