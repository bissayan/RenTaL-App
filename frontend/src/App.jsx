import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/AccountPage.jsx";
import PlacesPage from "./pages/PlacePage.jsx";
import PlaceViewPage from "./pages/PlaceViewPage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import SingleBooking from "./pages/SingleBooking.jsx";


import Layout from "./Layout";
import axios from "axios";
import { UserContextProvider } from './UserContext.jsx';
import PlacesFormPage from './pages/PlacesFormPage.jsx';
//import { useEffect } from 'react';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
function App() {  
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/account" element={<ProfilePage />} /> 
        <Route path="/account/places" element={<PlacesPage />} />
        <Route path="/account/places/new" element={<PlacesFormPage />} /> 
        <Route path="/account/places/:id" element={<PlacesFormPage />} />   
        <Route path="/places/:id" element={<PlaceViewPage />} />  

        <Route path="/account/bookings" element={<BookingsPage />} /> 
        <Route path="/account/bookings/:id" element={<SingleBooking />} />     
      </Route>      
    </Routes>  
    </UserContextProvider>  
  )
}

export default App
