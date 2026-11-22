import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function adminlayout() {
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (!isLoggedIn) navigate('/');
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    };

    return (
     <div className="container-fluid"> 
      <div className="row"> 
 
        <div 
          className={`col-12 col-md-3 col-lg-2 bg-primary text-white p-3 ${ 
            showSidebar ? "d-block" : "d-none d-md-block" 
          }`} 
          style={{ minHeight: "100vh" }} 
        > 
          <h4>Admin Panel</h4> 
          <hr /> 
 

          <ul className="nav flex-column"> 
 
            <li className="nav-item mb-2"> 
              <NavLink to="/admin" className="nav-link text-white"> 
                Dashboard 
              </NavLink> 
            </li> 

 23 
            <li className="nav-item mb-2"> 
              <NavLink to="/admin/produk" className="nav-link text-white"> 
                Produk 
              </NavLink> 
            </li> 
 
            <li className="nav-item mb-2"> 
              <NavLink to="/admin/kategori" className="nav-link text-white"> 
                Kategori 
              </NavLink> 
            </li> 
 
          </ul> 
 

          <button 
            onClick={handleLogout} 
            className="btn btn-dark mt-3 w-100" 
          > 
            Logout 
          </button> 
        </div> 
 
        <div className="col-12 col-md-9 col-lg-10 p-3 bg-light"> 
 
          <div className="d-md-none mb-3"> 
            <button 
              className="btn btn-primary" 
              // Toggle sidebar (true/false) 
              onClick={() => setShowSidebar(!showSidebar)} 
            > 
              ☰ Menu 
            </button> 
          </div> 
 
          <Outlet /> 
        </div> 
 
      </div> 
    </div> 
  ); 
} 
 
export default adminlayout;