import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component.jsx';


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
