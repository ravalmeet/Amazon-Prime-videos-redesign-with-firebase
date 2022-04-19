import "./App.css";
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import Watch from "./pages/watch/Watch";
// import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
