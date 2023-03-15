import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth: React.FC<any> = ({ children }) => {
  const location = useLocation();
  const user = useSelector((state: any) => state.auth.user);

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} />
    )
  }

  return children;
};

