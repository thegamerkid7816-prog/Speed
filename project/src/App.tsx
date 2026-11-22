import Login from './pages/login';
import ResetSuccess from './pages/reset-success';
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

  if (route === '/reset-success') {
    return <ResetSuccess />;
  }

  return <Login />;
}

export default App