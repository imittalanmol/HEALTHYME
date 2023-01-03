import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>

        
<nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container"><a href="/" to="/" className="navbar-brand d-flex align-items-center"> <i className="fa  fa-snowflake-o fa-lg text-primary mr-2"></i><strong>HEALTHYME</strong></a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className=" ml-auto navbar-nav ml-auto">
                <li className="nav-item active"><NavLink to="/" className="nav-link font-italic"> Home </NavLink></li>
                <li className="nav-item active"><NavLink to="/aboutus" className="nav-link font-italic"> About </NavLink></li>
                <li className="nav-item active"><NavLink to="/alldoctors" className="nav-link font-italic"> Doctors </NavLink></li>
                <li className="nav-item active"><NavLink to="/contactus" className="nav-link font-italic"> Contact</NavLink></li>
                <li className="nav-item active"><NavLink to="/services" className="nav-link font-italic"> Services</NavLink></li>
                <li className="nav-item active"><NavLink to="/book-my-appointment" className="nav-link font-italic"><button className="btn btn-outline-success btn-sm"> Book Appointment</button></NavLink></li>
            </ul>
            </div>
        </div>
        </nav>

        {/* <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <NavLink className="nav-link active" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" to='alldoctors'>Doctors</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" to='/aboutus'>About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" to='/services'>Services</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" to='/contactus'contact>Contact</NavLink>
                    </li>
                </ul>
                <form class="d-flex appointment">
                    <NavLink to='/book-my-appointment'>
                        <button class="btn btn-outline-success me-2" type="button">Book Appointment</button>
                    </NavLink>
                    </form>
                </div>
            </div>
        </nav> */}
        
    </>
  )
}

export default Navbar