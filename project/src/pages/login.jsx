import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/admin/dashboard');

        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="container-fluid" vh-100 d-flex align-items-center justify-content-center bg-light>
            <div className="card shadow p-4 w=100" style={{ maxWidth: '400px' }}>
                <h3 className="card-title text-center mb-4">Login</h3>
                <form onSubmit={handleLogin}>

                    <div className="mb-3">
                        <label>username</label>

                        <input
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>password</label>

                        <input
                            type="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-primary w-100">
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}