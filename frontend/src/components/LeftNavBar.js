import { Link } from "react-router-dom";

const LeftNavBar = () => {
    return (

            <aside className="sidebar-wrapper" data-simplebar="true">
                <div className="sidebar-header">
                    <div>
                        <img src="/assets/images/logo-icon.png" className="logo-icon" alt="logo icon"/>
                    </div>
                    <div>
                        <h4 className="logo-text">Onedash</h4>
                    </div>
                    <div className="toggle-icon ms-auto"> <i className="bi bi-list"></i>
                    </div>
                </div>

                <ul className="metismenu" id="menu">
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon"><i className="bi bi-house-fill"></i>
                            </div>
                            <div className="menu-title">Dashboard</div>
                        </a>
                        <ul>
                            <li> <Link to="/admin/dashboard"><i className="bi bi-circle"></i>Blue Dashboard</Link>
                            </li>
                            <li> <a href="index2.html"><i className="bi bi-circle"></i>Color Dashboard</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon"><i className="bi bi-grid-fill"></i>
                            </div>
                            <div className="menu-title">Application</div>
                        </a>
                        <ul>
                            <li> <Link to="/admin/employees"><i className="bi bi-circle"></i>Employees</Link>
                            </li>
                        </ul>
                    </li>


                </ul>

            </aside>

    );
}

export default LeftNavBar;