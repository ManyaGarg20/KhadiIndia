/* eslint-disable no-unused-vars */
// App.jsx
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Login from './pages/registration/Login';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import SignUp from './pages/registration/SignUp';

function App() {
  return (
<MyState>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/*" element={<NoPage/>} />
    </Routes>
  </Router>
  </MyState>
  )
}

export default App