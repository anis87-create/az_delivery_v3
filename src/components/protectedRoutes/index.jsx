import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  console.log('ProtectedRoutes component rendered');
  
  const { isAuth, currentUser } = useSelector((state) => state.auth);
  const location = useLocation();
  
  console.log('ProtectedRoutes - isAuth:', isAuth, 'currentUser:', currentUser);
  console.log('ProtectedRoutes - location:', location.pathname);
  
  if (!isAuth || !currentUser || !currentUser.id) {
    console.log('ProtectedRoutes - Redirecting to login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  console.log('ProtectedRoutes - Access granted');
  return children;
}

export default ProtectedRoutes
