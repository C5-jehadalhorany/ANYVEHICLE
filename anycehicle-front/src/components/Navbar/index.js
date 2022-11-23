import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth/index"

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
                {isLoggedIn ? (
                    <>
                        <Link className="Link" to="/">
                            Home
                        </Link>
                        <Link className="Link" to="/home">
                            Aboout Us
                        </Link>
                        <button className="logout" onClick={() => { dispatch(logout()) }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link className="Link" to="/">
                            Register
                        </Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </>
    );
};

export default NavBar;

