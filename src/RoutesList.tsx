import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard/DashboardLayout';

const RoutesList = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: []
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
};

export default RoutesList;