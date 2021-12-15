import "./App.css";
import Maincont from "./components/maincont";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Maincont />
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
