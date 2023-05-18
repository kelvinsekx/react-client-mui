import { Navigate, useRoutes } from 'react-router-dom';
import PostPage from "./pages/PostPage.tsx";
import PostDetailPage from './pages/PostDetailPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SimpleLayout from "./layouts/simple/SimpleLayout.tsx";
import RegisterPage from './pages/RegisterPage.tsx';
import CreatePostPage from './pages/CreatePostPage.tsx';
import IndexPage from './pages/IndexPage.tsx';

const RoutesList = () => {
    return useRoutes([
        {
            path: "/",
            element: <SimpleLayout/>,
            children: [
                { path: "", element: <PostPage title="Journals awaiting your correction"/> },
                { path: "/feed/teach", element: <PostPage title="Journals awaiting your correction"/> },
                { path: "/feed/learn", element: <PostPage title="Journals in the languages you’re studying"/> },
                { path: "/feed/create", element: <CreatePostPage /> },
                { path: "journals/:slug", element: <PostDetailPage/> },
            ]
        },
        { path: "login", element: <LoginPage/> },
        { path: "register", element: <RegisterPage/> },
        { path: "index", element: <IndexPage /> },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
};

export default RoutesList;