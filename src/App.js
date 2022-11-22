import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './features/auth/Login';
import Checklist from './features/checklist/Checklist';
import ChecklistItems from './features/checklistItems/ChecklistItems';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Checklist />,
    },
    {
      path: '/checklist-items',
      element: <ChecklistItems />,
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
