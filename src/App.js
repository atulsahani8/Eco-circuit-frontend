import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage';
import Profile from './pages/profile'
import RegisterPage from './pages/registerPage';
import EditProfile from './pages/editProfile';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/update' element={<EditProfile />} />
    </Routes>
  );
}

export default App;
