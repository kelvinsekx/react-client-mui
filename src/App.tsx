import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList.tsx';

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </>
  );
}

export default App;
