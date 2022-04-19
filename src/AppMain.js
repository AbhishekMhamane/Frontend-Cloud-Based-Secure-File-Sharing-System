import React from 'react'
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

const AppMain = () => {

  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
         <button onClick={() => loginWithRedirect()}>Log In</button> 
    </div>
  );


}

export default AppMain