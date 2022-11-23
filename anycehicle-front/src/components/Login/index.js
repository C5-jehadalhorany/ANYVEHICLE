import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth/index"
import { useNavigate } from "react-router-dom";
import ("./style.css")
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(false);

    const loginForall = async () => {
        axios.post("http://localhost:5000/login", {
            email,
            password
        }).then((result) => {
            console.log(result);
            setMessage("");
            setStatus(true);
            dispatch(login(result.data.token))
            navigate("/home")
        }).catch((err) => {
            setStatus(false);
            return setMessage(err.response.data.message);
        })
    }




    return (<div className="continer">
        <div className="Form">
            <p className="Title">Login:</p>
            <div >
                <br />
                <input className="loginInput"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input className="loginInput"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="buttonlogin" 
                    onClick={() => {
                        loginForall()
                    }}
                >
                    Login
                </button>
            </div>
            {status ? message && <div >{message}</div> : message && <div >{message}</div>}
        </div>
    </div>
    );
};

export default Login;
