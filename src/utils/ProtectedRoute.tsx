import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserData } from '../context/AuthContext';

interface IProps {
    children: React.ReactNode;
    user: UserData | null;
    redirectPath?: string;
}

const ProtectedRoute = ({ children, user, redirectPath = "/login" }: IProps) => {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;