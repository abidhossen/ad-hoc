import React from 'react';
import './Header.css';
import Logo from './Images/ECN.svg';
import Flag from './Images/flag-round-250.png';
import TextImg from './Images/Group 1215.svg';
import ChatIcon from './Images/chat.svg';
import {FaChevronDown} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header ">
        <div className="headerTop">
        <Navbar/>
            {/* <div className="N ">
              <div className="col-9 row">
                  <a className="Logo" href="#">
                      <img src={Logo} alt="Logo" className="LogoImg"></img>
                  </a>
                  <div className="row">
                  <div className= "col"><a className="NavLink" href="#">About Us <FaChevronDown className="NavIcon"/> </a></div>
                  <div className= "col"><a className="NavLink" href="#">AC Types <FaChevronDown className="NavIcon"/> </a></div>
                  <div className= "col"><a className="NavLink" href="#">Trading </a></div>
                  <div className= "col"><a className="NavLink" href="#">Platform </a></div>
                  <div className= "col"><a className="NavLink" href="#">Analysis & Tools </a></div>
                  <div className= "col"><a className="NavLink" href="#">Partner </a></div>
                  <div className= "col"><a className="NavLink" href="#">Wealth Management </a></div>
              </div>
              </div>
              
              <div className="col-3" >
              <button className="Search">
                  <FiSearch/>
              </button>
              <button className="LoginBtn">Register/Login</button>
                   <button className="CountryBtn">
                    <img className="Flag" src={Flag} alt="Country Flag"></img>
                    <FaChevronDown className="NavIcon"/>
                   </button>
              </div>
              </div> */}
            <div className="bgImgText row">
             <div className="col Text">
             <img src={TextImg} alt="Img"></img>
             <div className="Hd">Let Top Traders</div>
             <div className="HdBold">Work For You</div>
             <div className="HdSub">CFD Trading: Forex, Indices, Shares, Gold, Oil and more</div>
             <div className="HdSub">with a fully regulated broker.</div>
             <div className="BttnDiv">
                 <button className="LiveActBtn">Open Live Account <span className="IconDiv"><AiOutlineArrowRight className="LiveAccIcon"/></span></button>
                 <button className="OpenDemoBtn">OPEN DEMO ACCOUNT</button>
             </div>           

             </div>
            </div>
            <a className="ChatOption">
                <img src={ChatIcon} alt="Chat"/>
            </a>
        </div>
        <div className="headerBottom ">
        <div className="bottomCnt">
            <div className="bottomHd">from 0.0 Pips</div>
            <div className="bottomSubHd">Premiere Account</div>
        </div>
        <div className="VerticalRow"></div>
        <div className="bottomCnt">
            <div className="bottomHd">15</div>
            <div className="bottomSubHd">Funding Methods</div>
        </div>
        <div className="VerticalRow"></div>
        <div className="bottomCnt">
            <div className="bottomHd">16</div>
            <div className="bottomSubHd">Regulated Entities</div>
        </div>
        <div className="VerticalRow"></div>
        <div className="bottomCnt">
            <div className="bottomHd">$15</div>
            <div className="bottomSubHd">Minimum Deposit</div>
        </div>
        <div className="VerticalRow"></div>
        <div className="bottomCnt">
            <div className="bottomHd">85</div>
            <div className="bottomSubHd">Markets & Counting</div>
        </div>
        <div className="VerticalRow"></div>
        <div className="bottomCnt">
            <div className="bottomHd">300+</div>
            <div className="bottomSubHd">Trading Instruments</div>
        </div>


        </div>
        </div>
    );
};

export default Header;