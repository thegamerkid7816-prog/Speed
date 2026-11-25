import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login  from './pages/Login';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Category from './pages/Category';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='product' element={<Product />} />
            <Route path='category' element={<Category />} />
          </Route>
        </Route>
      </Routes>
          
    </BrowserRouter>
  )
}

export default App