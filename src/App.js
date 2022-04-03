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


const MainView = React.lazy(() => import('./Components/Mainpage/MainView'));
const Starred =  React.lazy(() => import('./Components/Mainpage/Starred'));
const SecondView =  React.lazy(() => import('./Components/Mainpage/SecondView'));
const Account = React.lazy(() => import('./Components/Mainpage/Account'));

function App() {

  // const API_URL = "http://localhost:3000";
   const emailId = "abhimhamane13@gmail.com";
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchUser(emailId));
    dispatch(fetchFiles(emailId));
    
  }, [dispatch]);


  return (
    <BrowserRouter>
      <div className='App'>
     
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/mydash" element={<MainView />} />
          <Route path="/folder/:id" element={<SecondView />} />
          <Route path="/starred/:id" element={<Starred />} />
          <Route path="/account/:id" element={<Account />} />
        </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
