import React from 'react'; 
import './App.scss';
import Layout from './layout/Layout';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from './pages/users/UserLIst';
import Products from './pages/products/Products';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  element={<Layout />}>
                  <Route path='/users' element={<UserList />} />
                  <Route path='/products' element={<Products />} />
          </Route>
          <Route  path='/' element={<AuthLayout />}>
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
