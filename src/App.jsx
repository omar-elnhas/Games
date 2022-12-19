import React from 'react'
import Platform from './Components/Platform/PLatform'
import Sortby from './Components/Sortby/Sortby'
import Categories from './Components/Categories/Categorie'
import NotFound from './Components/NotFound/NotFound'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import jwt_Decode from "jwt-decode";
import { useState,useEffect } from 'react';
import { Offline, Online } from "react-detect-offline";
import DetectOffline from './Components/DetectOffline/DetectOffline'
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Home from './Components/Home/Home';
import Register from './Components/Regester/Register';
import Login from './Components/LogIn/LogIn';
import All from './Components/All/All';
import Details from './Components/Details/Details';









export default function App() {
  let [userData, setUserData] = useState(null);
  function saveUser(props) {
    let token = localStorage.getItem("token");
    let decoded = jwt_Decode(token);
    setUserData(decoded);
  }
  


  let logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    return <Navigate to="login" />;
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUser();
    }
  }, []);



  let routers= createBrowserRouter([
    {path:'/',
    element:<Layout userData={userData} logout={logout} />,children:[
      {index:true,element:
      (  <ProtectedRoute userData={userData}>
        <Home/>
      </ProtectedRoute>)},
      {path:'all',element:
      (  <ProtectedRoute userData={userData}>
        <All/>
      </ProtectedRoute>)},
    
    {path:'platform/:platform',element:
      (<ProtectedRoute userData={userData}>
      <Platform/>
      </ProtectedRoute>)},

      {path:'login',element:
           <Login saveUser={saveUser}/>
        },
      {path:'register',element:
      <Register/>},

      {path:'sortby/:sortby',element:
      (  <ProtectedRoute userData={userData}>
      <Sortby/></ProtectedRoute>)},
      {path:'categories/:categories',element:
      (  <ProtectedRoute userData={userData}>
      <Categories/></ProtectedRoute>)},
     
      {path:'details/:id',element:
      (  <ProtectedRoute userData={userData}>
      <Details/></ProtectedRoute>)},
      {path:'*',element:<NotFound/>},
    ]}
  ])
  return (
      <>
    <Online><RouterProvider router={routers}/></Online>
    <Offline><DetectOffline/></Offline>

      </>

    )
}



