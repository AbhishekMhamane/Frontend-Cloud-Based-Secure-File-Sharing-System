import './App.css';
import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/user/userSlice';
import { fetchUser } from './store/user/userActions';
import { fetchFiles } from './store/file/filesActions';
import { useNavigate } from "react-router-dom";

import MainView from './Components/Mainpage/MainView';
import SecondView from './Components/Mainpage/SecondView';
import Starred from './Components/Mainpage/Starred';
import Account from './Components/Mainpage/Account';
import Public from './Components/Mainpage/Public';
import Publiccard from './Components/Mainpage/Publiccard';
import Demo from './demo.js';

import { useAuth0 } from "@auth0/auth0-react";
import AppMain from './AppMain';
import Homepage from './Components/Home/Homepage';

function App() {


  const { isAuthenticated, loginWithRedirect } = useAuth0();


  return (

    isAuthenticated ? (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route exact path="/mydash" element={<MainView />} />
            <Route path="/folder/:id" element={<SecondView />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/account" element={<Account />} />
            <Route path="/public" element={<Public />} />
          </Routes>
        </div>
      </BrowserRouter>
    ) : (<BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          {/* <Route exact path="/*" element={ <Navigate to="/" /> } /> */}
        </Routes>
      </div>
    </BrowserRouter>)
  );
}

export default App;
