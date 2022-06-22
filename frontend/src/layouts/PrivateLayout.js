import { Route, Routes } from "react-router-dom";
import LeftNavBar from "../components/LeftNavBar";
import Dashboard from "./../pages/Dashboard";

const PrivateLayout = () => {
    return (
        <div>
            <h1>Private Place</h1>
            <LeftNavBar />
            <Routes>
                <Route path='dashboard' element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default PrivateLayout;
