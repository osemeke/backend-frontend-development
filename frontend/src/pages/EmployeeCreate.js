import TopBar from "../components/TopBar";
import LeftNavBar from "../components/LeftNavBar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EmployeeCreate = () => {

    /** datepicker/ loading/ error-handling/ datatable/ double-call axios/ */

    //init
    const [positions, setPositions] = useState(null);

    const [name, setName] = useState('');
    const [positionId, setPositionId] = useState('');
    const [age, setAge] = useState('');
    const [startDate, setStartDate] = useState('');
    const [salary, setSalary] = useState('');

    // navidation
    let navigate = useNavigate();

    const goBack = () => {
        navigate("/admin/employees");
    };

    //on render
    useEffect(() => {
        console.log('reloaded');
        fetch('https://localhost:7014/api/positions')
            .then(response => response.json())
            .then(data => { console.log(data); setPositions(data.items) });
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const payload = { name, positionId, age, startDate, salary };
        console.log(startDate);
        fetch('https://localhost:7014/api/employees', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then(()=>{ console.log('done!')});
    }

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
                                <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li>
                                <li class="breadcrumb-item" aria-current="page"><Link to="/admin/employees">Employees</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Create Employee</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="ms-auto">
                        <div class="btn-group">
                            <button type="button" onClick={goBack} class="btn btn-primary"><i class="bi bi-chevron-left"></i> Back</button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <h6 class="mb-0 text-uppercase">Date Time Pickers</h6>
                        <hr />
                        <div class="card">
                            <div class="card-body">
                                <div class="border p-3 rounded">


                                    <form onSubmit={handleSubmit}>

                                        <div class="mb-3">
                                            <label class="form-label">Employee Name</label>
                                            <input class="form-control" type="text" value={name} onChange={e => setName(e.target.value)} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Position</label>
                                            <select class="form-select" value={positionId} onChange={e => setPositionId(e.target.value)}>
                                                <option>---Select Item---</option>
                                                {positions && positions.map((item) => (<option value={item.id}>{item.name}</option>))}
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Age</label>
                                            <input class="form-control" type="text" value={age} onChange={e => setAge(e.target.value)} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Pick a Date</label>
                                            <input type="text" class="form-control datepicker" value={startDate} onChange={e => console.log(e)} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Salary</label>
                                            <input class="form-control" type="text" value={salary} onChange={e => setSalary(e.target.value)} />
                                        </div>
                                        <div class="mb-3">
                                            <button type="submit" class="btn btn-primary px-5">Register</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </main>

        </div>




    );
}

export default EmployeeCreate;