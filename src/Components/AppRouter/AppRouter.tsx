import { Routes, Route } from 'react-router-dom';
import { routes } from '../../router/routes';

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route 
          path={route.path} 
          element={route.component} 
          key={route.path}
        >
        </Route>
      ))}
    </Routes>
  );
};
