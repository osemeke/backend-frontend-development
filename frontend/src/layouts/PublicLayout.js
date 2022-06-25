import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Landing from "./../pages/Landing";
import Login from "./../pages/Login";

const PublicLayout = () => {
    return (
        <div className="wrapper">
            <NavBar />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='login' element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default PublicLayout;