import './App.css';
import Login from './components/Login';
import NavBar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from "react-router-dom";
import Maintenance from './components/Maintenance';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={"/register"} element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={ <Maintenance/> } />
       
      </Routes>
    </div>
  );
}

export default App;
