import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import GetCurrentuser from './hooks/GetCurrentuser';
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Generate from './pages/Generate';

const App = () => {
  const {userData} = useSelector(state => state.user)
    return (
        <BrowserRouter>
            <GetCurrentuser />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={userData ? <Dashboard/> : <Home/>} />
                <Route path='/generate' element={userData ? <Generate/> : <Home/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;