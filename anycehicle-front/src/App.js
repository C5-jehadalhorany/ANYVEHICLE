import './App.css';
import Login from './components/Login';
import NavBar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from "react-router-dom";
import Maintenance from './components/Maintenance';
import AdminSide from './components/Adminside';
import Usermaintenaces from './components/Usermaintenace';
import { Charts } from './components/ChartForAdmin';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={"/register"} element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={ <Maintenance/> } />
        <Route path="/admin" element={ <AdminSide/> } />
        <Route path="/req" element={ <Usermaintenaces/> } />
        <Route path="/chart" element={ <Charts/> } />
      </Routes>
    </div>
  );
}

export default App;
