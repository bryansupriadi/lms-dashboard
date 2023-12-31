import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Ongoing from './Pages/Ongoing';
import Finished from './Pages/Finished';
import ClassInfo from './Pages/ClassInfo';
import ClassDetail from './Pages/ClassDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/kelas-berlangsung",
    element: <Ongoing/>,
  },
  {
    path: "/kelas-selesai",
    element: <Finished/>,
  },
  {
    path: "/info-kelas",
    element: <ClassInfo/>,
  },
  {
    path: "/:page/:topic/:classCode",
    element: <ClassDetail/>,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
