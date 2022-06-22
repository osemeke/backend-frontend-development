import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Landing from "./../pages/Landing";
import Login from "./../pages/Login";

const PublicLayout = () => {
    return (
            <div>
            <NavBar />

                <h1>Public Place</h1>
            {/* <Outlet /> */}

                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='login' element={<Login />} />
                </Routes>
            </div>
    );
}

export default PublicLayout;
