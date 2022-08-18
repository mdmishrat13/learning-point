import React from 'react';
import './dashboard.css';
import Navbar from './../../../componants/Navbar/Navbar.js'
import {Link} from 'react-router-dom'
import ManageCourses from '../ManageCourses/ManageCourses';
import ManageOrders from '../ManageOrders/ManageOrders';

const Dashboard = () => {
    return (
        <>
        <Navbar/>
        <div className='dashboard'>
            <div className="dashboard__container">
                <div className="dashboard__leftbar">
                    <div className="logo">
                        <h3>Learning Point</h3>
                    </div>
                    <Link to='#'>Courses</Link>
                    <Link to="#">Manage Orders</Link>
                    <Link to="#">Users</Link>
                    <Link to="#">Pending Courses</Link>
                    <Link to="#">Statistics</Link>
                    <div className="logout-btn">
                    <button>Logout</button>
                    </div>
                </div>
                <div className="dashboard__right">
                    {/* <ManageCourses/> */}
                    <ManageOrders/>
                </div>
            </div>
        </div></>
    );
};

export default Dashboard;