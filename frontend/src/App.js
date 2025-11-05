import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Authentication from './Pages/Authentication';
import { AuthProvider } from './context/AuthContext';
import VideoMeet from './Pages/VideoMeet';
import History from './Pages/History';
import HomeComponent from './Pages/HomeComponent';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>

          <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/auth' element={<Authentication/>} />

            <Route path='/home' element={<HomeComponent/>}/>

            <Route path='/history' element={<History/>} />
            
            <Route path='/:url' element={<VideoMeet/>} />
          </Routes>

        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
