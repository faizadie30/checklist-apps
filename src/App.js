import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import Checklist from './features/checklist/Checklist';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Checklist />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <div>Register Page</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
