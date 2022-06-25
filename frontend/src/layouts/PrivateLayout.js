import { Route, Routes } from "react-router-dom";
import EmployeeCreate from "../pages/EmployeeCreate";
import EmployeeList from "../pages/EmployeeList";
import Dashboard from "./../pages/Dashboard";

const PrivateLayout = () => {
    return (
        <div>
            <Routes>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='employees' element={<EmployeeList />} />
                <Route path='employees/create' element={<EmployeeCreate />} />
                <Route path='*' element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default PrivateLayout;
