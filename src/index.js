import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Header from './features/gowheels/Header';
import Admin from './features/gowheels/admin';
import Manager from './features/gowheels/manager';
import Login from './features/gowheels/login';
import Signup from './features/gowheels/Signup';
import Drivers from './features/gowheels/Drivers';
import DriverExpensesForm from './features/gowheels/Register';
import Expenses from './features/gowheels/Expenses';
import Expensesform from './features/gowheels/Expensesform';
import EditDriverForm from './features/gowheels/Editdriverform';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:"/",
        element:<Header></Header>
      },
      {
        path:"/admin",
        element:<Admin></Admin>
      },
      {
        path:"/manager",
        element:<Manager></Manager>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      }, 
      {
        path:"/drivers",
        element:<Drivers></Drivers>,
      }, 
      {
        path: "/drivers/registation",
        element: <DriverExpensesForm></DriverExpensesForm>,
      },    
      {
        path: "/drivers/editdriverform",
        element: <EditDriverForm></EditDriverForm>
      },    
      {
        path:"/expenses",
        element:<Expenses></Expenses>,
      },
      {
            path:"/expenses/expensesform",
            element:<Expensesform></Expensesform>
    },
    ] 
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
