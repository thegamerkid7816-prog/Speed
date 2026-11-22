import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import Signup from './pages/signup';

function App() {
  const route = window.location.pathname.replace(/\/+$/, '');

  if (route === '/signup') {
    return <Signup />;
  }

  if (route === '/reset-password') {
    return <ResetPassword />;
  }

  return <Login />;
}

export default App