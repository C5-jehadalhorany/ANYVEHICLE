import './App.css';
import Login from './components/Login';
import NavBar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
