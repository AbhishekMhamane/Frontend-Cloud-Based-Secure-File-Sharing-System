import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";

import MainView from './Components/Mainpage/MainView';
import SecondView from './Components/Mainpage/SecondView';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/mainpage" element={<Mainpage />} /> */}
          <Route exact path="/" element={<MainView />} />
          <Route path="/folder/:id" element={<SecondView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
