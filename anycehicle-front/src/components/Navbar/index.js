import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth/index"
import logo from "./logos.png";
import "./style.css"
const NavBar = () => {
    const dispatch = useDispatch();

    const { isLoggedIn, roles } = useSelector((state) => {
        return {
            isLoggedIn: state.auth.isLoggedIn,
            roles: state.auth.roles
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
                        {roles == "admin" ? (<>
                            <Link className="Link" to="/">
                                Home
                            </Link>
                            <Link className="Link" to="/admin">
                                admin
                            </Link>
                            <Link className="Link" to="/req">
                                Services
                            </Link>
                            <Link className="Link" to="/home">
                                Contact Us
                            </Link>
                            <Link className="Link" to="/login" >
                                <button className="logout" onClick={() => { dispatch(logout()) }}>
                                    Logout
                                </button>
                            </Link>
                        </>) : (<><Link className="Link" to="/">
                            Home
                        </Link>
                            <Link className="Link" to="/about-us">
                                About Us
                            </Link>
                            <Link className="Link" to="/req">
                                Services
                            </Link>
                            <Link className="Link" to="/blog">
                                Blog
                            </Link>
                            <Link className="Link" to="/shop">
                                Shop
                            </Link>
                            <Link className="Link" to="/contact">
                                Contact Us
                            </Link>
                            <Link className="Link" to="/login" >
                                <button className="logout" onClick={() => { dispatch(logout()) }}>
                                    Logout
                                </button>
                            </Link>
                        </>)}
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

