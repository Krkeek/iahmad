import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import NoPage from "./components/noPage/noPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path={'/homePage'} element={<HomePage />}></Route>
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
