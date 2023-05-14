import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList.tsx';
import { AuthContextProvider } from './context/AuthContext.tsx';

function App() {
    return (
        <>
            <CssBaseline/>
            <AuthContextProvider>
                <BrowserRouter>
                    <RoutesList/>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    );
}

export default App;
