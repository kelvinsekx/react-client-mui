import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import SimpleLayout from './layouts/simple/SimpleLayout.tsx';
import PostPage from "./pages/PostPage.tsx";
import DashboardHomePage from "./pages/DashboardHomePage.tsx";
import IndexPage from './pages/IndexPage.tsx';
import PostDetailPage from './pages/PostDetailPage.tsx';

const RoutesList = () => {
    return useRoutes([
        {
            path: "/",
            element: <DashboardLayout />,
            children: [
                { path: "", element: <DashboardHomePage /> },
                { path: "teach", element: <PostPage /> },
                { path: "learn", element: <PostPage /> },
                { path: "journals/:slug", element: <PostDetailPage /> },
            ]
        },
        {
            path: "/index",
            element: <SimpleLayout />,
            children: [
                { path: "", element: <IndexPage /> },
            ]
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
};

export default RoutesList;