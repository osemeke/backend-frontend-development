import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white rounded-0 border-bottom">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="assets/images/brand-logo-2.png" width="140" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                                    Downloads <i className="bi bi-chevron-down align-middle ms-2"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Time Table</a></li>
                                    <li><a className="dropdown-item" href="#">Instructions</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Biometric Software</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:;">Contact Us</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex ms-3 gap-3">
                            <Link to='/auth/login' className="btn btn-primary btn-sm px-4 radius-30">Login</Link>
                            <Link to='/auth/register' className="btn btn-white btn-sm px-4 radius-30">Register</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;