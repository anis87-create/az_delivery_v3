import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const { isAuth, currentUser } = useSelector((state) => state.auth);
  const location = useLocation();
  
  if (!isAuth || !currentUser || !currentUser.id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}

export default ProtectedRoutes
