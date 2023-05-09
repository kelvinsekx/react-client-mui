import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import PostPage from "./pages/PostPage.tsx";
import DashboardHomePage from "./pages/DashboardHomePage.tsx";

const RoutesList = () => {
    return useRoutes([
        {
            path: "/",
            element: <DashboardLayout />,
            children: [
                { path: "", element: <DashboardHomePage /> },
                { path: "teach", element: <PostPage /> },
                { path: "learn", element: <PostPage /> },
            ]
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
};

export default RoutesList;