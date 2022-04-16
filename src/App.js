import './App.css';
import React, { Suspense,useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {userActions} from './store/userSlice';
import {fetchUser} from './store/userActions';
import {fetchFiles} from './store/filesActions';


// const MainView = React.lazy(() => import('./Components/Mainpage/MainView'));
// const Starred =  React.lazy(() => import('./Components/Mainpage/Starred'));
// const SecondView =  React.lazy(() => import('./Components/Mainpage/SecondView'));
// const Account = React.lazy(() => import('./Components/Mainpage/Account'));

import MainView from './Components/Mainpage/MainView';
import SecondView from './Components/Mainpage/SecondView';
import Starred from './Components/Mainpage/Starred';
import Account from './Components/Mainpage/Account';
import Public from './Components/Mainpage/Public';
import Publiccard from './Components/Mainpage/Publiccard';
import Demo from './demo.js';


function App() {



  // const API_URL = "http://localhost:3000";
  //  const emailId = "abhimhamane13@gmail.com";
  //  const dispatch = useDispatch();

  //  useEffect(() => {
  //   dispatch(fetchUser(emailId));
  //   //dispatch(fetchFiles(emailId));
    
  // }, [dispatch]);


  return (
    <BrowserRouter>
      <div className='App'>
     
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
        <Route exact path="/" element={<Demo/>} />
          <Route exact path="/mydash" element={<MainView />} />
          <Route path="/folder/:id" element={<SecondView />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/account" element={<Account />} />
          <Route path="/public" element={<Public />} />
        </Routes>
        {/* </Suspense> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
