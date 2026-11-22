import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return window.location.pathname.replace(/\/+$/, '') === '/signup' ? <Signup /> : <Login />;
}

export default App