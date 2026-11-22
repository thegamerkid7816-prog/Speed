import { BrowerRouter, Routes, Route } from 'react-router-dom';

import login from './pages/login';
import adminlayout from './layouts/adminlayout';
import dashboard from './pages/dashboard';
import product from './pages/product';
import category from './pages/category';

import './App.css'

function App() {
  return (
    <BrowerRouter>
      <Routes>
        <Route>
          <Route path='/' element={<login />} />
          <Route path='/admin' element={<adminlayout />}>
            <Route index element={<dashboard />} />
            <Route path='product' element={<product />} />
            <Route path='category' element={<category />} />
          </Route>
        </Route>
      </Routes>
          
    </BrowerRouter>
  )
}

export default App