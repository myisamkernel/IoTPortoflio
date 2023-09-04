import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  
  if (!localStorage.getItem('token')) { // KALO TOKEN BELUM ADA MAKA AKAN DI REDIRECT KE HALAMAN LOGIN
    return <Navigate to='/login' state={{ from: location.pathname }} />
  }

  return children
}

export default PrivateRoute;
