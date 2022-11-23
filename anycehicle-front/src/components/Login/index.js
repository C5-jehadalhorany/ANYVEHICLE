import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth/index"
import { useNavigate } from "react-router-dom";
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




    return (<>
        <div className="Form">
            <p className="Title">Login:</p>
            <div >
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button
                    onClick={() => {
                        loginForall()
                    }}
                >
                    Login
                </button>
            </div>
            {status ? message && <div >{message}</div> : message && <div >{message}</div>}
        </div>
    </>
    );
};

export default Login;
