import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Khotib from './components/Khotib';
import Sholat from './components/Sholat';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Profile from './pages/Profile';
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profil' element={<Profile/>}/>
        <Route path='/adzan' element={<Sholat/>}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/khotib' element={<Khotib/>}/>
      </Routes>
    </BrowserRouter>
  );
}
