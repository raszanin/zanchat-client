import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import Routes from './routes';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
