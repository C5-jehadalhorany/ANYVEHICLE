import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth/index"
import logo from "./logos.png";
import "./style.css"
const NavBar = () => {
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector((state) => {
        return {
            isLoggedIn: state.auth.isLoggedIn,
        };
    });

    return (
        <>
            <div className="NavBar">
                {isLoggedIn ? (<>
                    <div>
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                    <div className="all">
                        <Link className="Link" to="/">
                            Home
                        </Link>
                        <Link className="Link" to="/home">
                            Aboout Us
                        </Link>
                        <Link className="Link" to="/home">
                            Services
                        </Link>
                        <Link className="Link" to="/home">
                            Blog
                        </Link>
                        <Link className="Link" to="/home">
                            Shop
                        </Link>
                        <Link className="Link" to="/home">
                            Contact Us
                        </Link>
                        <Link className="Link" >
                            <button className="logout" onClick={() => { dispatch(logout()) }}>
                                Logout
                            </button>
                        </Link>
                    </div></>
                ) : (
                    <>
                        <div>
                            <img className="logo" src={logo} alt="Logo" />
                        </div>
                        <div className="allReg">
                            <Link className="Link" to="/register">
                                Register
                            </Link>
                            <Link className="Link" to="/login">Login</Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default NavBar;

