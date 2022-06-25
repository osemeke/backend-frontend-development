import TopBar from "../components/TopBar";
import LeftNavBar from "../components/LeftNavBar";

const Dashboard = () => {
    return (
        
        <div className="wrapper">

        <TopBar/>
        <LeftNavBar/>

            <main className="page-content">

                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
                    <div className="col">
                        <div className="card overflow-hidden radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                                    <div className="w-50">
                                        <p>Total Orders</p>
                                        <h4 className="">8,542</h4>
                                    </div>
                                    <div className="w-50">
                                        <p className="mb-3 float-end text-success">+ 16% <i className="bi bi-arrow-up"></i></p>
                                        <div id="chart1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card overflow-hidden radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                                    <div className="w-50">
                                        <p>Total Views</p>
                                        <h4 className="">12.5M</h4>
                                    </div>
                                    <div className="w-50">
                                        <p className="mb-3 float-end text-danger">- 3.4% <i className="bi bi-arrow-down"></i></p>
                                        <div id="chart2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card overflow-hidden radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                                    <div className="w-50">
                                        <p>Revenue</p>
                                        <h4 className="">$64.5K</h4>
                                    </div>
                                    <div className="w-50">
                                        <p className="mb-3 float-end text-success">+ 24% <i className="bi bi-arrow-up"></i></p>
                                        <div id="chart3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card overflow-hidden radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                                    <div className="w-50">
                                        <p>Customers</p>
                                        <h4 className="">25.8K</h4>
                                    </div>
                                    <div className="w-50">
                                        <p className="mb-3 float-end text-success">+ 8.2% <i className="bi bi-arrow-up"></i></p>
                                        <div id="chart4"></div>
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

export default Dashboard;