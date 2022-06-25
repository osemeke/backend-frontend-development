import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import LeftNavBar from "../components/LeftNavBar";
import { Link, useNavigate } from "react-router-dom";

const EmployeeList = () => {

    //init
    const [employees, setEmployees] = useState(null);

    // navidation
    let navigate = useNavigate();

    const goCreate = () => {
        navigate("/admin/employees/create");
    };

    //on render
    useEffect(() => {
        console.log('reloaded');
        fetch('https://localhost:7014/api/employees')
            .then(response => response.json())
            .then(data => { console.log(data); setEmployees(data.items)});
    },[]);


    return (

        <div class="wrapper">

            <TopBar />
            <LeftNavBar />

            <main class="page-content">

                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="breadcrumb-title pe-3">Employees</div>
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Employees</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="ms-auto">
                        <div class="btn-group">
                            <button type="button" onClick={goCreate} class="btn btn-primary"><i class="bi bi-plus-lg"> </i> Create</button>
                        </div>
                    </div>
                </div>
                
                <h6 class="mb-0 text-uppercase">Employee Salary and Position</h6>
                <hr />
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="example2" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees && employees.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.positionId}</td>
                                            <td>{item.age}</td>
                                            <td>{item.startDate}</td>
                                            <td>{item.salary}</td>
                                        </tr>))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>




    );
}

export default EmployeeList;