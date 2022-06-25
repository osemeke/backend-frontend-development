import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="wrapper">

            <main className="authentication-content">
                <div className="container-fluid">
                    <div className="authentication-card">
                        <div className="card shadow rounded-0 overflow-hidden">
                            <div className="row g-0">
                                <div className="col-lg-6 bg-login d-flex align-items-center justify-content-center">
                                    <img src="/assets/images/error/login-img.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body p-4 p-sm-5">
                                        <h5 className="card-title">Sign In</h5>
                                        <p className="card-text mb-5">See your growth and get consulting support!</p>
                                        <form className="form-body">
                                            <div className="d-grid">
                                                <a className="btn btn-white radius-30" href="javascript:;"><span className="d-flex justify-content-center align-items-center">
                                                    <img className="me-2" src="/assets/images/icons/search.svg" width="16" alt=""/>
                                                        <span>Sign in with Google</span>
                                                </span>
                                                </a>
                                            </div>
                                            <div className="login-separater text-center mb-4"> <span>OR SIGN IN WITH EMAIL</span>
                                                <hr/>
                                            </div>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label for="inputEmailAddress" className="form-label">Email Address</label>
                                                    <div className="ms-auto position-relative">
                                                        <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-envelope-fill"></i></div>
                                                        <input type="email" className="form-control radius-30 ps-5" id="inputEmailAddress" placeholder="Email Address"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputChoosePassword" className="form-label">Enter Password</label>
                                                    <div className="ms-auto position-relative">
                                                        <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-lock-fill"></i></div>
                                                        <input type="password" className="form-control radius-30 ps-5" id="inputChoosePassword" placeholder="Enter Password"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked=""/>
                                                            <label className="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="col-6 text-end">	
                                                <Link to="authentication-forgot-password.html">Forgot Password ?</Link>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary radius-30">Sign In</button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p className="mb-0">Don't have an account yet? <a href="authentication-signup.html">Sign up here</a></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default Login;