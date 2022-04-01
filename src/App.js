import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";

import MainView from './Components/Mainpage/MainView';
import SecondView from './Components/Mainpage/SecondView';
import Starred from './Components/Mainpage/Starred';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/mainpage" element={<Mainpage />} /> */}
          <Route exact path="/mydash" element={<MainView />} />
          <Route path="/folder/:id" element={<SecondView />} />
          {/* <Route path="/starred/:id" element={<Starred />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
