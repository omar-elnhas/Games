import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import '../App/App.css';
import JwtDecoe from 'jwt-decode'
import Register from './../Regester/Register';
import Home from './../Home/Home';
import All from './../All/All';
import Categorie from './../Categories/Categorie';
import LogIn from './../LogIn/LogIn';
import PLatform from './../Platforms/PLatform';
import SortBy from './../SortBy/SortBy';
import MasterLayout from './../MasterLayout/MasterLayout';
import  { useEffect, useState } from 'react'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Details from './../Details/Details';




function App() {
  const [userData, setUserData] = useState(null)
let saveUserData=()=>{
  let encodedToken=localStorage.getItem('token')
  let decodedToken=JwtDecoe(encodedToken)
  setUserData(decodedToken);
}
let logout =()=>{
  localStorage.removeItem('token')
  setUserData(null)
  return <Navigate to="login" />
}

useEffect(() => {
  if(localStorage.getItem('token'))
  {
    saveUserData()
  }
}, [])


  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout userData={userData} logout={logout}/>,
      
      children: [
        { index: true, element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: "all", element: <ProtectedRoute userData={userData}><All /></ProtectedRoute> },
        { path: "categorie", element: <ProtectedRoute userData={userData}><Categorie /></ProtectedRoute> },
        { path: "platform", element:<ProtectedRoute userData={userData}>< PLatform/></ProtectedRoute>  },
        { path: "sortby", element:<ProtectedRoute userData={userData}><SortBy /> </ProtectedRoute> },
        { path: "details", element:<ProtectedRoute userData={userData}><Details /> </ProtectedRoute> },
        { path: "login", element: <LogIn saveUserData={saveUserData} /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
