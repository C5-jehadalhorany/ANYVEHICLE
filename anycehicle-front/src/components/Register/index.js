import React, { useState } from "react";
import axios from "axios"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import("./style.css");


const Register = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector((state) => {
        return {
            isLoggedIn: state.auth.isLoggedIn,
        };
    });

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const role_id = 2
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);

    const registerforuser = async () => {
        axios.post("http://localhost:5000/register", {
            firstName,
            email,
            password,
            role_id
        }).then((result) => {
            if (result.data.success) {
                setStatus(true);
                navigate("/");
                return setMessage(result.data.massage);
            }
        }).catch((err) => {
            setStatus(false);
            return setMessage(err.response.data.massage);
        })
    }

    return (<>
        <div className="Form2">
            {!isLoggedIn ? (
                <div className="AllForm">
                    <p className="Title">Register:</p>
                    <div className="InputAndButton">
                        <input className="loginInput2"
                            type="text"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <br />
                        <input className="loginInput2"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <input className="loginInput2"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button className="buttonlogin2" onClick={() => {
                            registerforuser()
                        }}>Register</button>
                    </div>
                    {status ? message && <div >{message}</div> : message && <div >{message}</div>}
                </div>
            ) : (
                <p>Logout First</p>
            )}
        </div>
    </>
    );
};

export default Register;