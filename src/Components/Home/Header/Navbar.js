import React from 'react';
import './Header.css';
import Logo from './Images/logo_kfm.png';
import Flag from './Images/flag-round-250.png';
import {FaChevronDown} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light N">
  <div className="container-fluid" >
    <a className="navbar-brand" href="#" >
        <img src={Logo} alt="Logo"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbarIcon">
          <GiHamburgerMenu className="Hamburger"/>
      </span>
    </button>
    <div className="collapse navbar-collapse NavbarContents" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 NavLink">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          All
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          AC Types
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Trading</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Platform</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Analysis & Tools</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Partner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Wealth Management</a>
        </li>
        
         </ul>
      <form className="d-flex">
        <button className="btn" type="submit"></button>
      </form>
      <button className="Search">
                  <FiSearch/>
              </button>
              <button className="LoginBtn">Register/Login</button>
                   <button className="CountryBtn">
                    <img className="Flag" src={Flag} alt="Country Flag"></img>
                    <FaChevronDown className="NavIcon"/>
                   </button>
    </div>
  </div>
</nav>

    )
}

export default Navbar;