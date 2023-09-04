import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './component/PrivateRoute';
import PageNotFound from './pages/PageNotFound';
import AddDevice from './pages/AddDevice';
import SideNavBar from './component/SideNavBar';
import Device from './pages/Device';
import Register from './pages/Register';

const App = () => {
  return (

     <div className='homeContainer'>
      <SideNavBar/>
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>}></Route>

        <Route path='/addDevice' element={
          <PrivateRoute>
            <AddDevice/>
          </PrivateRoute>}></Route>

          <Route path='/device/:id' element={
          <PrivateRoute>
            <Device/>
          </PrivateRoute>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </div>    
  
  );
}

export default App;
