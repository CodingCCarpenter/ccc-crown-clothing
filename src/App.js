import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/sign-in/sign-in.component';


const App = () => {
  console.log ("App")

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/sign-in' element={<SignIn />} />
        </Route>   
      </Routes>
    </div>

  );
}

export default App;
