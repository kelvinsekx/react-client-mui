import { Navigate, Route, Routes } from 'react-router-dom';
import PostPage from "./pages/PostPage.tsx";
import PostDetailPage from './pages/PostDetailPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import CreatePostPage from './pages/CreatePostPage.tsx';
import LayoutWithContainer from './layouts/LayoutWithContainer.tsx';
import ProtectedRoute from './utils/ProtectedRoute.tsx';
import useAuthContext from './hooks/useAuthContext.tsx';
import LayoutWithoutContainer from './layouts/LayoutWithoutContainer.tsx';
import IndexPage from './pages/IndexPage.tsx';

const RoutesList = () => {
    const context = useAuthContext();
    
    if (context === undefined) {
        return <h1>Loading...</h1>;
    }
    
    const { currentUser } = context;

    return (
        <Routes>
            {/* Public Routes */}

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route element={<LayoutWithoutContainer />}>
                <Route path="/" element={<IndexPage />} />
            </Route>

            {/* Mixed Routes */}

            <Route element={<LayoutWithContainer />}>
                <Route path="/journals" element={<PostPage title="Recently corrected journals" />} />
                <Route path="journals/:slug" element={<PostDetailPage />} />
                <Route path="feed/create" element={<ProtectedRoute user={currentUser}><CreatePostPage /></ProtectedRoute>} />
            </Route>

            {/* Protected Routes */}

            <Route path="/" element={<ProtectedRoute user={currentUser}><LayoutWithContainer /></ProtectedRoute>}>
                <Route path="teach" element={<PostPage title="Journals awaiting your correction" />} />
                <Route path="feed/learn" element={<PostPage title="Journals in the languages you’re studying" />} />
                <Route path="feed/create" element={<ProtectedRoute user={currentUser}><CreatePostPage /></ProtectedRoute>} />
            </Route>

            {/* Catch all route */}
            {/* TODO: Make a <NotFoundPage /> */}
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
};

export default RoutesList;