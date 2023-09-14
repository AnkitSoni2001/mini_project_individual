import React from "react";
import Image from "../../Images/logo.png"
import "../../Styles/Sidebar/Sidebar.css";
import { useNavigate } from "react-router-dom";


const Home = () => {
    var Navigate = useNavigate();

    const handleLogOut = ()=>{
        Navigate('/')
    }
    return (
        <div className="menu_container">
            <img src={Image} className="logo" alt="Logo" />
            <a href="myprofile">My Profile</a>
            <a href="#about">Dashboard</a>
            <a href="#services">Timesheet</a>
            <a href="#clients">Projects</a>
            <a href="#contact">Leave</a>
            <a href="#contact">Work From Home</a>
            <a href="#contact">Approvals</a>
            <a href="#contact">Survey</a>
            <a href="#contact">Service Desk</a>
            <a href="#contact">Form</a>
            <a href="#contact">Travel</a>
            <a href="#contact">Setting</a>
            <a href="#contact">Control Panel</a>
            <a href="#contact">Resourcing</a>
            <a href="#contact">Access Control</a>
            <a>
                <div className="exit">
                    <span>Ankit Soni</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-right"
                        viewBox="0 0 16 16"
                        onClick={handleLogOut}
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                        />
                        <path
                            fillRule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                        />
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default Home;
