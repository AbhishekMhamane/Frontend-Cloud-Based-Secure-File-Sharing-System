import './App.css';
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";

const MainView = React.lazy(() => import('./Components/Mainpage/MainView'));
const Starred =  React.lazy(() => import('./Components/Mainpage/Starred'));
const SecondView =  React.lazy(() => import('./Components/Mainpage/SecondView'));

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/mainpage" element={<Mainpage />} /> */}
          <Route exact path="/mydash" element={<MainView />} />
          <Route path="/folder/:id" element={<SecondView />} />
          <Route path="/starred/:id" element={<Starred />} />
        </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
