import Login from './pages/login';
import Dashboard from './pages/dashboard';
import ResetSuccess from './pages/reset-success';
import ResetPassword from './pages/reset-password';
import Signup from './pages/signup';
import Membership from './pages/membership';

function App() {
  const route = window.location.pathname.replace(/\/+$/, '');

  if (route === '/signup') {
    return <Signup />;
  }

  if (route === '/reset-password') {
    return <ResetPassword />;
  }

  if (route === '/reset-success') {
    return <ResetSuccess />;
  }

  if (route === '/dashboard') {
    return <Dashboard isLoggedIn={localStorage.getItem('isLoggedIn') === 'true'} />;
  }

  if (route === '/membership') {
    return <Membership />;
  }

  return <Login />;
}

export default App